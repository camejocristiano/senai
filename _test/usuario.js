const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

    // Object
    const Usuario = mongoose.model('Usuario',
    {
        nome: String,
        idade: Number
    })

async function main () {
    
    // Create
    // Usuario.create({
    //     nome: "Cris",
    //     idade: 9
    // })

    // Update
    await Usuario.findOneAndUpdate({nome: "Origem"},
        {
            //nome: "Camejo",
            idade: 45
        }
    )

    // Delete
    // await Usuario.findOneAndDelete({nome: "Pedro"})

    // Find
    console.log(await Usuario.find());

}

main()