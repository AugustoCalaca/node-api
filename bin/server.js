const app = require('../src/app');
const http = require('http');
const debug = require('debug')('balta:server');

const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);
app.set('port', port);
server.listen(port);

console.log('API run in port ' + port);

// take the available server port
function normalizePort(val) {
  const port = parseInt(val, 10);

  if(isNaN(port)) return val;
  if(port >= 0) return port;
  return false;
}