const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

    // Create
    Produto.create({
        name : "PC",
        desciption : "I Todos, Memoria Full, HD Super",
        price : 1000
    })

    // Update
    await Produto.findOneAndUpdate({price: "1000"},{
        name : "PC Gamer Atualizado",
        desciption : "I Todos, Memoria Total, HD Super",
        price : 6000
        }
    )

    // Delete
    await Produto.findOneAndDelete({name: "Monitor AOC FullHD 144hz"})

    // Find
    console.log(await Produto.find());