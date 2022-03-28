const Olympicgames = require('./index');

const {sleep, writeFileJSON, singleRun} = require('../../../lib/common');
const _ = require('lodash');

class OlympicgamesApplet extends Olympicgames {
  static scriptName = 'OlympicgamesApplet';
  static scriptNameDesc = '全民运动会(小程序)';
  static doneShareTask = true;
  static times = 1;
  static maxTaskDoneTimes = 2;

  static apiNamesOption = {
    getTaskList: {
      paramFn: () => ({appSign: '2'}),
    },
  };
}

singleRun(OlympicgamesApplet).then();

module.exports = OlympicgamesApplet;
