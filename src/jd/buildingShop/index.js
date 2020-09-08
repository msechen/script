const Base = require('../base');

const {sleep} = require('../../lib/common');

class BuildingShop extends Base {
  static scriptName = 'BuildingShop';
  static apiOptions = {
    options: {
      headers: {
        'User-Agent': 'jdapp',
        'origin': 'https://h5.m.jd.com',
      },
      uri: 'https://request.fenquar.com/building/shop.php',
    },
    formatDataFn: data => data,
  };

  static async doMain(api, shareCodes) {
    const self = this;
    let userId = '';
    const _request = (type, form) => api.do({qs: {type, user_id: userId}, form});
    const {user_id} = await _request('login', {uid: api.cookie.split(';')[0].split('=')[1]});
    userId = user_id;

    await getUserInfo().then(async data => {
      const {active, active_limit} = data;
      for (const key in active) {
        if (!key.match('active')) continue;
        const taskId = key.replace('const_active', '').replace('active', '');
        if (+active_limit[key] === +active[key]) continue;
        await doTask(taskId, !!key.match('const'));
      }
    });

    await buyBuilding();

    await takeJd();

    async function getUserInfo() {
      return _request('user_info');
    }

    async function buyBuilding() {
      return _request('buy_building').then(async data => {
        if (data.status !== 0 || +data.next_floor_coin >= data.remain_coin) return;
        return buyBuilding();
      });
    }

    async function takeJd() {
      await _request('get_jingdou_record').then(async data => {
        const {record} = data;
        for (const {id, jingdou_number} of record.filter(o => o.is_use_up !== '1')) {
          await _request('take_jingdou', {record_id: id});
          self.log(`获取到的京豆数量为: ${jingdou_number}`);
        }
      });
    }

    async function doTask(taskId, isConst) {
      const form = {task_id: taskId};
      isConst && (form.is_const = 1);
      return _request('finish_task', form).then(async data => {
        if (data.status !== 0 || +data.may_finish_times >= +data.max_times) return;
        return doTask(taskId, isConst);
      });
    }
  }
}

module.exports = BuildingShop;
