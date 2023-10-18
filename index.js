// index.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const GatoModelo = mongoose.model('Gato', {
    raca: String,
    idade: Number,
    cor: String
})

const gatoQueAcheiNaRua = new GatoModelo({
    raca: "Siames",
    idade: 3,
    cor: "Branco"
})

gatoQueAcheiNaRua.save().then(console.log("Gato salvo com sucesso"))