const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Ask Misty',
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Ask Misty Started on port: ${server.address().port}`);
});
