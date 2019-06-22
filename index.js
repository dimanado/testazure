const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'dist/testAsuru')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/testAsuru/index.html'));
});

app.listen(port);
