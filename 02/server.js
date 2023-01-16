const http = require('http');
const fs = require('fs');

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
};

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data);
        })
    })
}

const app = http.createServer(async (req, res) => {
    let data = '404 not found';
    switch (req.url) {
        case '/home': {
            try {
                const data = await readFile('pages/home.html');
                res.write(data);
                res.end();
            } catch (e) {
                res.write('Something wrong');
                res.end();
            }
            break;
        }
        case '/about': {
            await delay(3000);
            res.write('ABOUT COURSE');
            res.end()
            break;
        }
        default: {
            res.end();
            break;
        }
    }
})

app.listen(3003);