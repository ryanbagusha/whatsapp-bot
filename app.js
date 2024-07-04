
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World ! 3000'));
app.listen(3000, () => console.log('Node.js app listening on port 3000.'));
