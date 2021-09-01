const http = require('http')
const querystring = require("querystring");
const fs = require('fs');
const path = require('path')
const file = path.resolve(__dirname, '../logs/cookies.list')

function writeCookie(pt_key, pt_pin) {
    const re = new RegExp('.*'+ pt_pin +'.*', 'g')
    const cookie = `pt_key=${pt_key};pt_pin=${pt_pin};`
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

const server = http.createServer(function(request, response) {
    const contentType = request.headers['content-type']
    // response.setHeader('Content-type', 'application/json')
    // && contentType === 'application/json'
    if (request.method === 'PUT' && request.url === '/cookie/update') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            // console.log(Buffer.concat(body).toArray())
            body = querystring.parse(Buffer.concat(body).toString());
            if (body.pt_key && body.pt_pin) {
                writeCookie(body.pt_key, body.pt_pin)
                // console.log(body.pt_key)
                response.end('OK');
            } else {
                response.statusCode = 400;
                response.end('Invalid param');
            }
        });
    } else {
        response.statusCode = 404;
        response.end();
    }
})

const port = 8888
const host = '0.0.0.0'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)