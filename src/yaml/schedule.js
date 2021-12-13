const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const getVarStr = name => '${{ ' + name + ' }}';
const genSecret = name => [name, getVarStr(`secrets.${name}`)];
const getNameByIndex = (name, index) => {
  let result = [name];
  index > 0 && result.push(index);
  return result.join('_');
};

function generateEnv(name, times = 6) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(genSecret(getNameByIndex(name, i)));
  }
  return result;
}

const envSecrets = _.fromPairs(_.flatten([
  ['NOT_RUN', 1],
  ['SEVER_CHAN_KEY', 1],
  ['MAILER_TRANSPORTER_OPTION', 1],
  ['JD_FRUIT_WATER_DISABLE', 1],
  ['JD_PET_FEED_DISABLE', 1],
  ['JD_LIVE_RED_ENVELOPE_RAIN_STOP', 1],
  ['JD_COOKIE_CONFIG', 1],
  ['JD_FRUIT_DO_DEFAULT_SHARE_LAST', 1],

  'JD_CRAZY_JOY_STOP_UPGRADE',
  'JD_JOY_FEED_INDEX',
  'JD_SIGN_IN_AT_THE_VOUCHER_CENTER_ENABLE',

  'JD_COOKIE',
  'JD_EARN_COOKIE',
  'JD_WQ_WX_COOKIE',
  'JD_WQ_WX_COOKIE_OPENID',
  'JD_APPLET_PIN',
  'JD_EARN_SHARE_CODE',
  'JD_FRUIT_SHARE_CODE',
  'JD_PET_SHARE_CODE',
  'JD_CASH_SHARE_CODE',
  'JD_BEAN_SHARE_CODE',
  'JD_FACTORY_SHARE_CODE',
  'JD_STALL_SHARE_CODE',
  'JD_STALL_SS',
  'JD_STALL_CRON_SS',
  'JD_BC_POSITION_LAT',
  'JD_BC_POSITION_LNG',
  'JD_SSJJ_SHARE_CODE',
  'JD_SSJJ_USER_NAME',
  'JD_DREAMFACTORY_SHARE_CODE',
  'JD_JXCFD_SHARE_CODE',
  'JD_NIAN_SHARE_CODE',
  'JD_BRANDCITY_SHARE_CODE',
  'JD_GLOBALCHALLENGE_SHARE_CODE',
  'JD_SPRINGREWARD_SHARE_CODE',
  'JD_XIEMI_SHARE_CODE',
  'JD_LITESIGN_SHARE_CODE',
  'JD_JXFARM_SHARE_CODE',
  'JD_ZOO_SHARE_CODE',
  'JD_OLYMPICGAMES_SHARE_CODE',
  'JD_EARNADVERTPLUGIN_INVITEID',
  ['JD_JXCFD_GROUP_SHARE_CODE', 1],
  ['JD_DREAMFACTORY_TUAN_ID', 1],
  ['JD_DREAMFACTORY_TUAN_ACTIVE_ID', 1],
].map(target => generateEnv(..._.concat(target)))));

// TODO 去掉不必要的时间
const runHours = [
  '0',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];
// github action 时区调整
const actionRunHours = _.sortBy(runHours.map(v => {
  let number = (v || 24) - 8;
  if (number < 0) number += 24;
  return number;
}));

const config = {
  'name': 'Lazy Script(Schedule New)',
  'on': {'schedule': [{'cron': `10 ${actionRunHours.join(',')} * * *`}]},
  'jobs': {
    'build': {
      'runs-on': 'ubuntu-latest',
      'steps': [
        {'name': 'Checkout codes', 'uses': 'actions/checkout@v2'},
        {
          'name': 'Cache node modules',
          'uses': 'actions/cache@v2',
          'env': {'cache-name': 'cache-node-modules'},
          'with': {
            'path': '~/.npm',
            'key': '${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles(\'**/package-lock.json\') }}',
            'restore-keys': '${{ runner.os }}-build-${{ env.cache-name }}-\n${{ runner.os }}-build-\n${{ runner.os }}-\n',
          },
        },
        {'name': 'Use Node.js', 'uses': 'actions/setup-node@v1', 'with': {'node-version': '14.x'}},
        {'name': 'Run app', 'run': 'npm install'},
        {
          'run': 'node src/app.js',
          'env': _.assign({
            NODE_ENV: 'production',
          }, envSecrets),
        }],
    },
  },
};


try {
  fs.writeFileSync(
    path.resolve(__dirname, '../../.github/workflows/schedule.yaml'),
    yaml.safeDump(config, {
      noCompatMode: true,
      lineWidth: 200,
    }),
    'utf8',
  );
} catch (e) {
  console.log(e);
}
