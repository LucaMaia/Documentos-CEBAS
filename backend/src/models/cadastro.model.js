const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_livro: {
        type: String,
        require: true,
    },
    autor_livro: {
        type: String,
        require: true,
    },
    data_publicacao:{
        type: Date,
        require: true,
    }
})

const cadastro = mongoose.model('Cadastro', DataSchema)
module.exports = cadastro;