const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const questions = require('./database/Questions');
const Resposta = require('./database/Resposta');

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
    questions.findAll({raw: true, order:[
        ['updatedAt','DESC']
    ]}).then((perguntas)=>{
        res.render("index", {
            perguntas: perguntas
        });
    });
});

app.get("/question",(req,res)=>{
    res.render("question");
});

app.get("/question/:id",(req,res)=>{
    var id = req.params.id;

    questions.findOne({
        where:{id: id}
    }).then((id)=>{
        if(id != undefined){
            Resposta.findAll({where:{
                questionId: id.id
            }, order:[
                ['updatedAt','DESC']
            ]}).then((respostas)=>{
                res.render("qtion", {
                    pergunta: id,
                    respostas: respostas
                });
            });
        }else{
            res.redirect("/");
        }
    });
});

app.post("/savep", (req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    questions.create({
        title: titulo,
        description: descricao
    }).then(()=>{
        res.redirect("/");
    });
});

app.post("/resposta",(req,res)=>{
    var resposta = req.body.resp
    var questionId =req.body.qId

    Resposta.create({
        questionId: questionId,
        corpo: resposta
    }).then(()=>{
        res.redirect("/question/"+questionId);
    });
    
});

app.listen(80,()=>{console.log("Server started successfully!");});