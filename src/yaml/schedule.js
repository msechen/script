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

  'JD_JOY_FEED_INDEX',

  'JD_COOKIE',
  'JD_EARN_COOKIE',
  'JD_APPLET_PIN',
  'JD_EARN_SHARE_CODE',
  'JD_FRUIT_SHARE_CODE',
  'JD_PET_SHARE_CODE',
  'JD_CASH_SHARE_CODE',
  'JD_BEAN_SHARE_CODE',
  'JD_FACTORY_SHARE_CODE',
  'JD_DREAMFACTORY_SHARE_CODE',
  'JD_JXCFD_SHARE_CODE',
  'JD_SPRINGREWARD_SHARE_CODE',
  'JD_LITESIGN_SHARE_CODE',
  'JD_JXFARM_SHARE_CODE',
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
