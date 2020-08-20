const _ = require('lodash');

const {Request} = require('../api');
const {sleep} = require('../../lib/common');
const {printLog} = require('../../lib/common');
const scriptName = 'guardianStar';
const _printLog = printLog.bind(0, scriptName, void 0);

async function main(cookie) {

  const api = new Request(cookie, {}, {
    headers: {
      origin: 'https://xeq1kjnhr.m.jd.com',
      'User-Agent': 'jdapp',
    },
    uri: 'https://xeq1kjnhr.m.jd.com',
  }, data => data.code === 200 ? data.data : data);


  const _doPath = async (name, functionId, form) => {
    await sleep();
    return api.doPath(`${name}/${functionId}`, form);
  };
  const doPath = _doPath.bind(0, 'guardianstar');

  await getHomePage();

  async function getHomePage() {
    await doPath(getHomePage.name).then(async data => {
      const {starId, venueList, shopList, productList, starPrizeVoList} = data[0];
      const requestOptions = [
        {
          list: venueList,
          type: 'venue',
          statuses: [1, 2],
          delay: 10,
          finishStatus: 3,
        },
        {
          list: shopList,
          type: 'shop',
          statuses: [0],
          delay: 2,
          finishStatus: 3,
        },
        {
          list: productList,
          type: 'product',
          statuses: [1, 2],
          delay: 10,
          finishStatus: 3,
        },
      ];
      for (const {list, type, statuses, delay, finishStatus} of requestOptions) {
        for (const object of list) {
          if (object[`${type}Status`] === finishStatus) continue;
          const id = object[`${type}Id`];
          for (const [index, status] of statuses.entries()) {
            const isLast = index === statuses.length - 1;
            await doTask(starId, type, id, status).then(data => {
              isLast && successLog(data);
            });
            !isLast && await sleep(delay);
          }
        }
      }

      // 抽奖
      for (const {prizeId, prizeType, status} of starPrizeVoList) {
        if (status === 6) continue;
        await getUserPrizeStatus(starId, prizeId, prizeType).then(data => {
          data = data || {};
          _printLog(data.msg || '抽中了啥');
        });
      }
    });
  }

  async function doTask(starId, type, id, status) {
    return doPath(doTask.name, {starId, type, id, status});
  }

  async function getUserPrizeStatus(starId, prizeId, prizeType, status = 3) {
    return doPath(getUserPrizeStatus.name, {starId, prizeId, prizeType, status});
  }

  function successLog({code = 200, bean, star}) {
    code === 200 && _printLog(`获取到的京豆为: ${bean}, 获取到的竹子为: ${star}`);
  }
}

async function start(data) {
  for (let i = 0; i < 1; i++) {
    for (const {cookie, shareCodes} of data) {
      await main(cookie, i === 0 ? shareCodes : void 0);
      await sleep();
    }
    await sleep(2);
  }
}

module.exports = start;
