import re
from common import auto_spider
from dao import zh_config_dao
from wxpy import *

logger = logging.getLogger('wx')

# 查询文章草稿列表
def query_article_draft():
    cookie = zh_config_dao.query_config('dxck').value
    draft_all = auto_spider.get_article_draft_all(cookie)

    result = []
    for i, item in enumerate(draft_all):
        if item['title'].startswith('Auto-'):
            tmp = "{}_{}".format(item['title'], item['id'])
            result.append(tmp)

    result.sort()

    return result


# 查询文章草稿内容
def query_article_draft_html(aid_list):
    cookie = zh_config_dao.query_config('dxck').value
    result = ''
    for aid in aid_list:
        draft_content = auto_spider.get_article_draft_html(aid, cookie)
        result += draft_content

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
    if origin_draft == '接口异常':
        return '找不到原草稿，qid：{}'.format(qid)

    reg = "<p>Auto-.+?</p>"
    pattern = re.compile(reg)
    template_list = re.findall(pattern, origin_draft['content'])
    if len(template_list) == 0:
        logger.info('原草稿内没有模板，qid：{}'.format(qid))
        return '原草稿内没有模板，不处理，qid：{}'.format(qid)

    new_draft_content = origin_draft['content']
    for template in template_list:
        template = template.replace('<p>', '')
        template = template.replace('</p>', '')
        words = template.split('_')
        

        if len(words) != 2:
            return '模板格式有误，不处理，template：{}'.format(template)

        aid = words[1]
        aids = [aid]

        template_html = query_article_draft_html(aids)

        new_draft_content = new_draft_content.replace(template, template_html)

    result = auto_spider.post_question_draft(qid, new_draft_content, cookie)
    logger.info('写草稿完成，时间：{}'.format(result['updated_time']))

    return '草稿模板替换成功，qid：{}，length：{}'.format(qid, len(new_draft_content))


if __name__ == "__main__":
    print(query_article_draft())
    # replace_question_draft_template(496761455)
    # aid_list = [508000788, 508000925, 507981653]
    # html = query_article_draft_html(aid_list)
    # print(html)
    # post_question_draft(496761455, html)
