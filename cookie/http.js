const http = require('http')
const path = require('path')
const common = require('./common')

const server = http.createServer(function(request, response) {
    const contentType = request.headers['content-type']
    // response.setHeader('Content-type', 'application/json')
    // && contentType === 'application/json'
    if (request.method === 'POST' && request.url === '/cookie/update') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            // console.log(Buffer.concat(body).toString())
            try {
                body = JSON.parse(Buffer.concat(body).toString());
                if (body.pt_pin) {
                    if (body.pt_key) {
                        common.writeFile(body.pt_key, body.pt_pin, common.cookies_file)
                        // console.log(body.pt_key)
                        response.end('OK');
                        return;
                    } else if (body.wskey) {
                        common.writeFile(body.wskey, body.pt_pin, common.wskeys_file)
                        // console.log(body.pt_key)
                        response.end('OK');
                        return;
                    }
                }
            } catch (e) {
                console.log(e)
            }
            response.statusCode = 400;
            response.end('Invalid param');
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