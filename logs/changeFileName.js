const fs = require('fs');

const result = fs.readdirSync('./').toString();

result.split(',').forEach(fileName => {
  if (fileName.match(/^\w+\.log\./)) {
    const [, name, date] = fileName.match(/(\w*)\.log.(\d+-\d+-\d+)/) || [];
    if (name && date) {
      require('child_process').execSync(`mv ${fileName} ${name}.${date}.log`);
    }
  }
});
