const mongoose = require('mongoose');
const dbdata = require('../data.json')
const fs = require('fs');
const cred = require('./cred.js');
require('dotenv').config();

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

//console.log('data from my data.json file',dbdata)

const uri = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-qfpck.mongodb.net/test?retryWrites=true`
mongoose.connect(uri, {useNewUrlParser: true});

let Schema = mongoose.Schema;

let infoSchema = new mongoose.Schema ({
    uuid: Number,
    name: String,
    openTimes: { 
        sunday: Array,
        monday: Array,
        tuesday: Array,
        wednesday: Array,
        thursday: Array,
        friday: Array,
        saturday: Array
    },
    address: String,
    GPS: {
        x: Number,
        y: Number
    },
    phone: String,
    email: String,
    url: String,
    pricing: Number,
    bld: String,
    category: String,
    foodScore: Number,
    decorScore: Number,
    serviceScore: Number,
    review: Array,
})
let Info = mongoose.model('Info', infoSchema);



const seed = () => { fs.readFile('./data.json', (err, data) => {
    
    let parsedata = JSON.parse(data);
    parsedata.map(e => {
     
    const newInfo = new Info(e)

    newInfo.save()
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    })
    })
  })
  }
  
  //seed()


// let save = (data) => {

//     Info.insertMany(data, function(err){
//         if(err){
//             console.log('error in data base save function', err)
//         }
//     })
// }

let findData = (obj, cb) => {
    Info.findOne(obj, function(err, infos){
      if(err){
        console.log(err)
      } else {
      cb(null,infos)
     // console.log('db infos', infos)
      }
    })
  }

  //save(dbdata);
// pass data into db with save()


module.exports = {findData};
