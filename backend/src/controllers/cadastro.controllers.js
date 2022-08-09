const cadastroLivro = require("../models/cadastro.model")

module.exports = {
    index (req,res){
        const cadastros = cadastroLivro.find()
        res.json(cadastros);
    },
     async create(req,res){
        const {nome_livro,autor_livro,data_publicacao} = req.body;

        let data = {};

        let cadastroNovo = cadastroLivro.findOne({nome_livro})

        if(!cadastroNovo){
            data = {nome_livro,autor_livro,data_publicacao}
            cadastroNovo =  await cadastroLivro.create(data);
            return res.status(200).json(cadastroLivro);
        }else{
            return res.status(500).json(cadastroLivro);
        }
    }
}