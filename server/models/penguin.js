var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Penguin = new Schema(
 {
   name: String,
   zoo: Boolean,
   nemesis: String
 }
);


//setting the stage for more advanced uses of environment variables
process.env.DB_HOST = 'mongodb://localhost/node-penguins';
mongoose.connect(process.env.DB_HOST);

// mongoose.connect('mongodb://localhost/node-penguins');

//penguins is the collections, Penguin is the schema
module.exports = mongoose.model('penguins', Penguin);

