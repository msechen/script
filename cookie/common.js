const fs = require('fs');
const path = require('path');

const cookies_file = path.resolve(__dirname, '../../logs/cookies.list')
const wskeys_file = path.resolve(__dirname, '../../logs/wskeys.list')

function writeFile(pt_key, pt_pin, file) {
    const re = new RegExp('.*'+ pt_pin +'.*', 'g')
    const cookie = `${pt_key};${pt_pin};`
    // console.log(re)
    fs.readFile(file,'utf8',function(err,data){
        // console.log('替換前' + data)
        let result = data.replace(re, cookie);
        // console.log('替換後' + result)
        fs.writeFile(file, result, 'utf8', function (err) {
            if (err){
                console.log(err)
            }
        });
    })
}

module.exports = {
    cookies_file,
    wskeys_file,
    writeFile
}