var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);  // or req.originalUrl
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is up on port: ', PORT);
});
