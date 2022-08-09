const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const app = express();
const port = process.env.PORT || 5000

//Rodar o comando 'node server.js'

mongoose.connect('mongodb://localhost:27017/noderest', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }, function (err){
    if(err){
        console.log(err)
    }else{
        console.log("MongoDb CONECTADO COM SUCESSO!")
    }
});

app.get('/', (req, res) => res.json({message: 'Funcionando'}));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function(){
    console.log('server running on port ' + port)
});








