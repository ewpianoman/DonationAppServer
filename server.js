const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

let PORT;

process.env.STATUS === 'production'
    ? (PORT = process.env.PROD_PORT)
    : (PORT = process.env.DEV_PORT);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log('Server is listening on Port', PORT);
})