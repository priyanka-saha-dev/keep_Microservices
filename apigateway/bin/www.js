const app = require('../app');
const config = require('../config');

const port = config.WWW_PORT;

app.listen(port, () => {
  //console.log(`API Gateway App is listening to ${port}`);
})