const express = require("express");
const app = express();
const cors = require("cors");
const Port = process.env.PORT || 5000;

app.use(cors());


app.get('/', (req, res) => {
    res.send("Web technology API Running");
})

app.listen(Port, () => {
    console.log("Web technology server running on port:", Port);
})
