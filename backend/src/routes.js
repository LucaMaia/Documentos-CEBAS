const express = require('express');
const routes = express.Router();
const cadastro = require("./controllers/cadastro.controllers")

const app = express();

routes.get("/", cadastro.index)

routes.post('/api/formularios', (req,res)=> {
    cadastro.create().then(()=>{

    });
})

module.exports = routes;

