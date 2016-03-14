var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var c1Schema = new Schema({
    firstName: {type:String, required: true},
    lastName: {type:String,required: true},
    email:{ 
            type:String,
            required:true,
            unique:true
          },
}, {
    timestamp:true
});

var C1 = mongoose.model('C1', c1Schema);

module.exports = C1;
