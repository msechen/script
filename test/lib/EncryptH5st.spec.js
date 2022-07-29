const _ = require('lodash');
const EncryptH5st = require('../../src/lib/EncryptH5st');
const {formatPasteData} = require('../../src/lib/charles');
const assert = require('assert');

function formatForm(form) {
  if (_.isString(form)) {
    form = formatPasteData(form);
  }
  try {
    form.body = JSON.parse(form.body);
  } catch (e) {}

  return form;
}

async function main(form, algoData) {
  form = formatForm(form);
  const h5st = form['h5st'];
  delete form['h5st'];
  const encryptH5st = new EncryptH5st({
    version: _.get(algoData, 'data.version'),
    fingerprint: h5st.split(';')[1],
    appId: h5st.split(';')[2],
    timestamp: +_.last(h5st.split(';')),
    algoData,
  });

  const _test = form => encryptH5st.sign(form).then(data => data.h5st === h5st);

  // TODO 验证不过进行form组合
  return _test(form);
}

describe('lib/EncryptH5st', function () {
  const array = [
    [
      `functionId\tjoyMove
body\t{"joyId":182867,"location":1,"linkId":"LsQNxL7iWDlXUs6cFl-AAg"}
t\t1658502342958
appid\tactivities_platform
h5st\t20220722230543106;2059562218306608;50788;tk02wa0571bcc18nMa8ZdRidWAh36t9mWmi/ZOUtDFv0YsVGWmWbb83h8gwIjyln/NXkhS1q0J8/FB+Zk7fICtmw5ZrI;ff7b9ebe99bdccb16ec406c979ba8e966e9040a8c37d2b9f4d27b88be3358d5d;3.0;1658502343106`,
      {
        'status': 200,
        'message': '',
        'data': {
          'version': '3.0',
          'result': {
            'tk': 'tk02wa0571bcc18nMa8ZdRidWAh36t9mWmi/ZOUtDFv0YsVGWmWbb83h8gwIjyln/NXkhS1q0J8/FB+Zk7fICtmw5ZrI',
            'algo': 'function test(tk,fp,ts,ai,algo){var rd=\'a8ZdRidWAh3H\';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.MD5(str)}',
          },
        },
      },
    ],
    [
      `functionId\tjoyBaseInfo
body\t{"linkId":"LsQNxL7iWDlXUs6cFl-AAg","taskId":"","inviteType":"","inviterPin":""}
appid\tactivities_platform
t\t1658997436329
h5st\t20220728163716333;8787341627338896;4abce;tk02wb2a21c7f18ncDDfeJqZJlIIwNnl9tsTtAcgB3jmGj41F6auTpf5CKKYWPDMVh99aNqW5fRnMlGKPxNxg1kuwHOl;5d3c215a59a4506fc6cf3c920c4c3d2c704039dce94857247bb3628373e6d413;3.0;1658997436333`,
      {
        'status': 200,
        'message': '',
        'data': {
          'version': '3.0',
          'result': {
            'tk': 'tk02wb2a21c7f18ncDDfeJqZJlIIwNnl9tsTtAcgB3jmGj41F6auTpf5CKKYWPDMVh99aNqW5fRnMlGKPxNxg1kuwHOl',
            'algo': 'function test(tk,fp,ts,ai,algo){var rd=\'DDfeJqZJlIIj\';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.MD5(str)}',
          },
        },
      },
    ],
    [
      {
        'functionId': 'joyList',
        'body': '{"linkId":"LsQNxL7iWDlXUs6cFl-AAg"}',
        'appid': 'activities_platform',
        't': '1658942432335',
        'h5st': '20220728012032336;8787341627338896;e18ed;tk02wb5631cdb18n4Spiw7OAMfOPVxxXHJHmngwPs54Rq4o0WXi5Waa1qZT/lFbuqVmI9WYYmgaIdDJ3WCPsnOhsloRv;01a2bc74d88f2e0bfdd96b1a26bf04f20ee8a2958306c11afb00a85d2f301d41;3.0;1658942432336',
      },
      {
        'status': 200,
        'message': '',
        'data': {
          'version': '3.0',
          'result': {
            'tk': 'tk02wb5631cdb18n4Spiw7OAMfOPVxxXHJHmngwPs54Rq4o0WXi5Waa1qZT/lFbuqVmI9WYYmgaIdDJ3WCPsnOhsloRv',
            'algo': 'function test(tk,fp,ts,ai,algo){var rd=\'Spiw7OAMfOPn\';var str=`${tk}${fp}${ts}${ai}${rd}`;return algo.SHA256(str)}',
          },
        },
      },
    ],
  ];
  for (let [form, algoData] of array) {
    form = formatForm(form);
    it(`functionId = ${form.functionId}`, async function () {
      assert.strictEqual(await main(form, algoData), true);
    });
  }
});
