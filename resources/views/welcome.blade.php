<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Projeto Vue - Jeito Ninja</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 v-if="status">@{{ titulo }}</h1>
                </div>
                <div class="col-sm-6">
                    <ul  class="list-group" v-for="(pessoas, i) in pessoa">
                        <li class="list-group-item" >
                            <span class="text-muted">Nome: </span>@{{ pessoa.nome }}
                        </li>
                        <li class="list-group-item" >
                            <span class="text-muted">Telefone: </span>@{{ pessoa.telefone }}
                        </li>
                        <li class="list-group-item">
                            <span class="text-muted">Novidades: </span>@{{ pessoa.novidades }}
                        </li>
                        <li class="list-group-item">
                            <span class="text-muted">Interesses: </span>@{{ pessoa.interesses }}
                        </li>
                        <li class="list-group-item">
                            <span class="text-muted">Conheceu: </span>@{{ pessoa.conheceu }}
                        </li>
                    </ul>
                    <p v-else>Não existe nenhuma linguagem</p>
                </div>
                <div class="col-sm-6 border p-4 rounded">
                    <div class="form-group">
                        <label for="">Nome:</label>
                        <input type="text" v-model="pessoa.nome">
                        <label for="">telefone:</label>
                        <input type="text" v-model="pessoa.telefone">
                    </div>
                    <div class="form-group mt-2 mb-2">
                        <label for="">Deseja receber:</label><br/>
                        <input type="radio" value="sim" v-model="pessoa.novidades"> Sim
                        <input type="radio" value="nao" v-model="pessoa.novidades"> Não
                    </div>
                    <div class="form-group">
                        <label for="">Interesses:</label>
                        <input type="checkbox" value="futebol" v-model="pessoa.interesses">Futebol<br/>
                        <input type="checkbox" value="futvolei" v-model="pessoa.interesses">Futvolei<br/>
                        <input type="checkbox" value="f1" v-model="pessoa.interesses">F1<br/>
                        <input type="checkbox" valur="volei" v-model="pessoa.interesses">Vôlei<br/>
                        <label for="">Como nos conheceu:</label>
                        <select type="text" v-model="pessoa.conheceu">
                            <option value="">Selecione</option>
                            <option value="tv">TV</option>
                            <option value="revista">Revista</option>
                            <option value="rua">Rua</option>
                            <option value="igreja">Igreja</option>
                            <option value="sinal-deus">Sinal de Deus</option>
                        </select>
                    </div>
                    <button class="btn btn-primary"> Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                status: true,
                titulo: "Vue JS Treinamento",
                textoExibir: true,
                linguagens: [
                    {nome: "PHP"},
                    {nome: "JS"},
                    {nome: "C#"},
                    {nome: "Phyton"},
                    {nome: "JAVA"},
                    {nome: "asd"},
                    {nome: "asd"},
                    {nome: "ffas"}
                ],
                pessoa: [{
                    nome: "",
                    telefone: "",
                    novidades: "",
                    interesses: [],
                    conheceu: "",
                }]



            }
        });
    </script>

</body>
</html>
