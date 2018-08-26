const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const cors = require("cors");

const app = express();



app.use(bodyParser.json());
app.use(cors());

app.get("/api/words/:difficulty", (req, res) => {
    const difficulty = req.params.difficulty;
    axios({
        method: 'get',
        url: `http://app.linkedin-reach.io/words?difficulty=${difficulty}&minLength=4&maxLength=10`,
    }).then(response => {
        res.status(200).send(response.data)
    }).catch(err => console.log(err))
});

let port = 3005
app.listen(port, () => console.log(`listening on port ${port}`));