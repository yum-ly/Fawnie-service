const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/info', {useNewUrlParser: true});
const dbdata = require('../data.json')
const fs = require('fs');

//console.log('data from my data.json file',dbdata)

let Schema = mongoose.Schema;

let infoSchema = new mongoose.Schema ({
    name: String,
    openTimes: { 
        sunday: Array,
        monday: Array,
        tuesday: Array,
        wednesday: Array,
        thursday: Array,
        friday: Array,
        saterday: Array
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

let find = (obj, cb) => {
    Info.find(obj, function(err, infos){
      if(err){
        console.log(err)
      } else {
      cb(null,infos)
      }
    })
  }

  //save(dbdata);
// pass data into db with save()

module.exports = {find};
