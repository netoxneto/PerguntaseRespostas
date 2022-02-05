<h1>Projeto Web de Perguntas e respostas com express.js</h1>
<br>
<h3>Em desenvolvimento..</h3>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Guia Bootstrap</title>
</head>
<body>
    <nav class="navbar navbar-ligth bg-primary">
        <a href="/" class="navbar-brand">
            <img src="/public/img/guia.png">
        </a>
    </nav>
    <div class="container">
        <div class="card" id="formulario-pergunta">
            <div class="card-header">
                <h3>Realizar pergunta</h3>
            </div>
            <div class="card-body">
                <form>
                    <label>Título</label>
                    <input type="text" placeholder="Título" class="form-control" name="titulo">
                    <br>
                    <label>Descrição</label>
                    <textarea placeholder="Descreva sua pergunta aqui!" class="form-control" name="descricao"></textarea>
                    <br>
                    <button class="btn btn-primary">Perguntar</button>
                </form>
            </div>
        </div>     
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
<script  src="/js/bootstrap.min.js"></script>
</html>