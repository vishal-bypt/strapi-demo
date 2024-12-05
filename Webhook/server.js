var express = require("express");
const bodyParser = require('body-parser');
var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("Hello Worlxxxxd!");
});

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('Webhook received successfully');
});
// This is REQUIRED for IISNODE to work
app.listen(3001, () => {
  console.log("listening");
});