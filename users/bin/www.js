const app = require('../app');
const config = require('../config');

app.listen(config.PORT, () => {
  //console.log(`Users App is listening to ${config.PORT}`);
})