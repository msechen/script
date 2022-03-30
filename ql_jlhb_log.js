let logs = []


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
