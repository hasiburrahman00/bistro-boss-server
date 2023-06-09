const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middlwares: 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('server is running ');
})
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
