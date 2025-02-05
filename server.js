const express = require('express');
const bodyParser = require('body-parser');

const webTests = require('./routes/webTests');
const apiTests = require('./routes/apiTests');
const mobileTests = require('./routes/mobileTests');
const performanceTests = require('./routes/performanceTests');

const app = express();
const port = 3010;

app.use(bodyParser.json());

app.use('/tests/web', webTests);
app.use('/tests/api', apiTests);
app.use('/tests/mobile', mobileTests);
app.use('/tests/performance', performanceTests);

app.listen(port, () => {
  console.log(`Test Automation API running on http://localhost:${port}`);
});
