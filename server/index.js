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

app.get("/api/define/:word", (req, res) => {
    const word = req.params.word;
    axios({
        method: 'get',
        url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${word}/definitions`,
        headers: {
            app_id: 'ec169c3d',
            app_key: '350a111111161088a441c9564e3e47b5'
        }
    }).then(response => {
        res.status(200).send(response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
    }).catch(err => {
        res.send(err.Error)
    })
});

app.get('/api/translate/:word', (req, res) => {
    const word = req.params.word;
    axios({
        method: 'get',
        url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180828T191739Z.4a931e589084722e.fea70e97eb5ee9841f1b7ec4ecd8b334a0c583dd&text=${word}&lang=en-es`
    }).then(response => {
        res.status(200).send(response.data.text[0])
    }).catch(err => {
        res.send(err.Error)
    })
});

let port = 3005
app.listen(port, () => console.log(`listening on port ${port}`));