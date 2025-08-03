const http = require('http');
const app = require('./api/app');
const port = 3002;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
})