// Object
const Produto = mongoose.model('Produto',
{
     nome : String,
     descricao : String,
     preco : Number,
     estoque: String
})