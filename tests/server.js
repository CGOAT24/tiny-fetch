const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ data: 'Hello world!'});
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.get('/error', (req, res) => {
    return res.status(403).send({
        message: 'This is an error!'
    });
})

module.exports = app;

if (require.main === module) {
    app.listen(port);
}