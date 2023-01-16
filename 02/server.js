const http = require('http');

const app = http.createServer((req,res) => {
    switch (req.url) {
        case '/home': {
            const data = 'best free online course';
            res.write(data);
            res.end();
        }
        default: {
            res.write('404 not found');
            res.end();
        }
    }
})

app.listen(3003);