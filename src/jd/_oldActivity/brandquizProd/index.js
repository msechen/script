const MappingTemplate = require('../../base/mapping');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');

class BrandquizProd extends MappingTemplate {
  static scriptName = 'BrandquizProd';
  static scriptNameDesc = '手机销量竞猜';
  static dirname = __dirname;
  static shareCodeTaskList = [];
  static commonParamFn = () => ({});
  static times = 2;

  static indexUrl = 'https://electricsuper.jd.com';
  static appid = 'apple-jd-aggregate';
  static functionId = 'brandquiz_prod';

  static async doMain(api, shareCodes) {
    const self = this;

    // const shareId = 'efed8e76-634a-41fc-948a-ae74689b6b8a';
    // return api.doApiMapping('/api/support/doSupport', {shareId});

    let {code, data: {quizId, firstQuiz, supportInfo}, msg} = await api.doApiMapping('/api/index/indexInfo');

    if (!self.isSuccess(code)) return api.log(msg);

    await handleSubmit();

    const {shareId} = await api.doApiMapping('/api/support/getSupport', {quizId}).then(_.property('data'));
    self.updateShareCodeFn(shareId);
    await handleDoShare();
    await getSupportReward();

    async function handleSubmit() {
      if (!self.isFirstLoop()) return;
      // 获取销量排行
      const brandRankList = await api.doApiMapping('/api/index/brandRank', {quizId}).then(_.property('data')) || [];
      const submitList = brandRankList.filter((o, index) => index < 5);
      await indexQuiz(_.map(submitList, 'id').join(',')).then(data => {
        api.log(`已提交竞猜, 排名为: ${_.map(submitList, 'name')}, 下一场次为 ${data.data.nextQuizDate}`);
      });
    }

    // 提交竞猜
    async function indexQuiz(quizStr) {
      return api.doApiMapping('/api/index/quiz', {quizId, quizStr, predictId: ''});
    }

    async function handleDoShare() {
      for (const shareId of self.getShareCodeFn()) {
        await api.doApiMapping('/api/support/doSupport', {shareId});
      }
    }

    // 获取竞猜助力豆豆
    async function getSupportReward() {
      if (!self.isLastLoop()) return;
      for (const [supporterIndex, {beanStatus}] of supportInfo.entries()) {
        if (beanStatus === 1) {
          await api.doApiMapping('/api/support/getSupportReward', {supporterIndex, shareId});
        }
      }
    }
  }
}

singleRun(BrandquizProd).then();

module.exports = BrandquizProd;
