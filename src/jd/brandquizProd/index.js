const MappingTemplate = require('../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../lib/common');
const _ = require('lodash');

class BrandquizProd extends MappingTemplate {
  static scriptName = 'BrandquizProd';
  static scriptNameDesc = '手机销量竞猜';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;

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

    const {data: {quizId, firstQuiz, supportInfo}} = await api.doApiMapping('/api/index/indexInfo');

    if (firstQuiz) {
      const {shareId} = await api.doApiMapping('/api/support/getSupport', {quizId}).then(_.property('data'));
      self.updateShareCodeFn(shareId);
      await handleDoShare();
    }

    if (self.isLastLoop()) {
      // 只提交一次竞猜
      // if (firstQuiz) return;
      // 获取销量排行
      const brandRankList = await api.doApiMapping('/api/index/brandRank', {quizId}).then(_.property('data')) || [];
      const submitList = brandRankList.filter((o, index) => index < 5);
      await handleSubmit(_.map(submitList, 'id').join(',')).then(data => {
        api.log(`已提交竞猜, 排名为: ${_.map(submitList, 'name')}, 下一场次为 ${data.data.nextQuizDate}`);
      });

      if (firstQuiz) {
        // 获取竞猜助力豆豆
        for (const [supporterIndex, {beanStatus}] of supportInfo.entries()) {
          if (beanStatus === 1) {
            await api.doApiMapping('/api/support/getSupportReward', {supporterIndex, shareId});
          }
        }
      }
    }

    // 提交竞猜
    async function handleSubmit(quizStr) {
      return api.doApiMapping('/api/index/quiz', {quizId, quizStr, predictId: ''});
    }

    async function handleDoShare() {
      for (const shareId of self.getShareCodeFn()) {
        await api.doApiMapping('/api/support/doSupport', {shareId});
      }
    }
  }
}

singleRun(BrandquizProd).then();

module.exports = BrandquizProd;
