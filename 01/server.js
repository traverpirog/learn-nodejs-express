const http = require('http');

let requestCounts = 0;

const server = http.createServer((request, response) => {
    let statusCode = 200;
    switch (request.url) {
        case '/':
            requestCounts+=1;
            response.write('Request count - ' + requestCounts);
            break;
        case '/students':
            response.write('Students');
            break;
        default:
            response.write('Not found');
            statusCode = 404;
            break;
    }
    request.statusCode = statusCode;
    response.end();
}).listen(3003);