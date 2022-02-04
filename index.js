const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

connection.authenticate().then(()=>{
    console.log('Database successfully connected!');
}).catch((msgErro)=>{
    console.log(msgErro);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/question",(req,res)=>{
    res.render("question");
});

app.post("/savep", (req,res)=>{
    var tituto = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Titulo: "+tituto+"<br>"+"Descrição: "+descricao);
});

app.listen(18970,()=>{console.log("Server started successfully!");});