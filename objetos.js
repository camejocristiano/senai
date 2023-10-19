const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27014/test');


const Produto = mongoose.model('Produto', {
	name: String, 
	description: String, 
	price: Number
});

// const LapTop = new Produto({
// 	name : "PC",
// 	desciption : "I Todos, Memoria Total, HD Super",
// 	price : 1000
// });

// LapTop.save().then(console.log("Produto Válido!"));


Produto.find().then(value => console.log(value))