// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-unresolved
const cookieParser = require('cookie-parser');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const envs = require('./serverConfig');

const app = express();
const port = process.env.PORT || 3001;

app.use(cookieParser());

app.use(express.static('dist'));

app.use(express.static('public'));

app.get('*', (_req, res) => {
    res.sendFile(path.resolve('dist', 'waivr-demo/index.html'));
});

console.log('Server envs', envs);

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});
