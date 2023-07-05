const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/ZapatillasProyecto");

var modelSchema = new Schema({
    _id: {type:Number},
    nroventa: {type:Number},
    nombre: {type:String},
    pedido: [],
    fecha: {type: Date, default: Date.now},
    total: {type:number}
});

var model = mongoose.model('Ventas',modelSchema,'Ventas');
module.exports = model;