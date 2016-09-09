const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

require('./config/middleware')(app, express);
require('./config/routes')(app, express);

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('\033[34m <TRPPR> Server listening on port: \033[0m', app.get('port'));
});
