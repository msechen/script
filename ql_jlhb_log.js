const puppeteer = require('puppeteer');
const jinliUrl = "https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html?channel=160"
let logs = [
]
if (process.env.logs) {
    if (process.env.logs.indexOf('\n') > -1) {

        logs = process.env.logs.split('\n');
    } else {
        logs = process.env.logs.split();
    }
}
for (let i = 0; i < logs.length; i++) {
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['logs' + index] = logs[i];
}
