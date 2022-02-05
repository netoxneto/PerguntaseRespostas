const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const questions = require('./database/Questions');

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
    }).then((pergunta)=>{
        if(pergunta){
            res.render("qtion", {
                pergunta: pergunta
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

app.listen(18970,()=>{console.log("Server started successfully!");});