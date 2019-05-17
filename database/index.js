const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/info');

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
    phone: Number,
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

let save = (data) => {
    Info.insertMany(data, function(err){
        if(err){
            console.log('error in data base save function', err)
        }
    })
}

let find = (obj, cb) => {
    Info.find(obj, function(err, infos){
      if(err){
        console.log(err)
      } else {
      cb(null,infos)
      }
    })
  }

module.exports = {save, find};
