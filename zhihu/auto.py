import re
from common import auto_spider
from dao import zh_config_dao
from wxpy import *

logger = logging.getLogger('wx')
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
sh = logging.StreamHandler()  # 输出日志到终端
sh.setLevel(logging.DEBUG)
sh.setFormatter(formatter)
logger.addHandler(sh)

# 查询文章草稿列表
def query_article_draft():
    cookie = zh_config_dao.query_config('dxck').value
    draft_all = auto_spider.get_article_draft_all(cookie)

    result = ''

    for i, item in enumerate(draft_all):
        if item['title'].startswith('Auto-'):
            result = result + str(item['id']) + "_" + item['title'] + '\n'

    return result


# 查询文章草稿内容
def query_article_draft_html(aid_list):
    cookie = zh_config_dao.query_config('dxck').value
    result = ''
    for aid in aid_list:
        draft_content = auto_spider.get_article_draft_html(aid, cookie)
        result += draft_content['content']

    return result


# 写回答草稿
def post_question_draft(qid, content):
    cookie = zh_config_dao.query_config('dxck').value
    result = auto_spider.post_question_draft(qid, content, cookie)

    logger.info('写草稿完成，时间：{}'.format(result['updated_time']))

    return


# 替换草稿内的模板
def replace_question_draft_template(qid):
    cookie = zh_config_dao.query_config('dxck').value

    origin_draft = auto_spider.get_question_draft_html(qid, cookie)

    reg = "<p>Auto.+?</p>"
    pattern = re.compile(reg)
    template_list = re.findall(pattern, origin_draft)
    if len(template_list) == 0:
        logger.info('原草稿内没有模板，qid：{}'.format(qid))
        return

    new_draft = origin_draft
    for template in template_list:
        template = template.replace('<p>', '')
        template = template.replace('</p>', '')
        words = template.split('_')

        aid = words[0]
        aids = [aid]

        template_html = query_article_draft_html(aids)

        new_draft = new_draft.replace(template, template_html)

    logger.info('替换后的草稿内容：{}', new_draft)

    result = auto_spider.post_question_draft(qid, new_draft, cookie)
    logger.info('写草稿完成，时间：{}'.format(result['updated_time']))

    return


if __name__ == "__main__":
    aid_list = [508000788, 508000925, 507981653]
    html = query_article_draft_html(aid_list)
    print(html)
    post_question_draft(496761455, html)
