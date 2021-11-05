const MappingTemplate = require('../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class BrandquizProd extends MappingTemplate {
  static scriptName = 'BrandquizProd';
  static scriptNameDesc = '手机销量竞猜';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 1;

  static apiCustomOption() {
    return {
      options: {
        headers: {
          origin: 'https://electricsuper.jd.com',
          referrer: 'https://electricsuper.jd.com/',
        },
        form: {
          appid: 'apple-jd-aggregate',
          functionId: 'brandquiz_prod',
        },
      },
    };
  };

  static async doMain(api, shareCodes) {
    const self = this;

    const {data: {quizId, firstQuiz}} = await api.doApiMapping('/api/index/indexInfo');
    // 只提交一次竞猜
    // if (firstQuiz) return;
    // 获取销量排行
    const brandRankList = await api.doApiMapping('/api/index/brandRank', {quizId}).then(_.property('data')) || [];
    const submitList = brandRankList.filter((o, index) => index < 5);
    await handleSubmit(_.map(submitList, 'id').join(',')).then(data => {
      api.log(`已提交竞猜, 排名为: ${_.map(submitList, 'name')}, 下一场次为 ${data.data.nextQuizDate}`);
    });

    // 提交竞猜
    async function handleSubmit(quizStr) {
      return api.doApiMapping('/api/index/quiz', {quizId, quizStr, predictId: ''});
    }
  }
}

singleRun(BrandquizProd).then();

module.exports = BrandquizProd;
