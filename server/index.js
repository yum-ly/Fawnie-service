const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index');
let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req,res) {
    console.log('post request on express server on path / ');
    res.send('sucessfull posting in express')

    // if(err){
    //     console.log(err)
    //     res.status(400)
    //     res.send('error on post request');
    // } else {
    //     console.log('sucessfull post request in express')
    //     //db.save(add in data that need to be posted to the db)
    //     res.status(200)
    //     res.send('sucessfull posting in express')
    // }
});

app.get('/info', function(req,res){
    console.log('get request on express server on path /info ');
    //res.send('sucessfull get req in express')
    db.find({}, (err,data) => {
        if(err){
            console.log('error in DB.find function in server get request :',err)
        } else {
            console.log(data)
            res.send(data)
        }
    })

});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});