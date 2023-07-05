const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/ZapatillasProyecto");

var modelSchema = new Schema({
    _id: {type:Number},
    nombre: {type:String},
    marca: {type:String},
    tipo:{type:String,default:"Zapatillas"},
    descripcion: {type:String},
    precio: {type:Number}
});
var model = mongoose.model('Productos',modelSchema,'Productos');
module.exports = model;