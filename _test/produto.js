const LapTop = new Produto({
    name : "PC",
    desciption : "I Todos, Memoria Total, HD Super",
    price : 1000
});


LapTop.save().then(console.log("Produto Válido!"));


Produto.find().then(value => console.log(value))