const express = require('express');
const app = express();

require('dotenv').config();
require('./starters/routes')(app);

app.get('/', (req, res) => {
  res.send('Welcome to my first messanger bot experience project');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Webhook server is running at port ${port}..`));
