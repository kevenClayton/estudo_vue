<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue aula 7</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <div id="app">
        <div class="container">
            <div class="row d-flex justify-content-center my-auto">
                <div class="col-5">
                    <div class="border rounded box-shadow py-4 px-3 text-center">
                        <img class="img-fluid" width="100" :src="imgLogo">
                        <h1>@{{ titulo }}</h1>
                        <p>@{{ text }} </p>
                        <p v-if="nome"><span class="text-muted">Autor:</span> @{{ nome }}</p>
                        <ul>
                            <li v-for="usuario in usuarios">@{{ usuario.nome | truncate('5') }}</li>
                        </ul>
                        <p v-if="nome">@{{  dataHora }}</p>
                        <form action="https://gestaoclick.com.br">
                            <div class="form-group">
                                <label for="nome">Nome:</label>
                                <input type="text" v-model="nome">
                            </div>
                            <button class="btn" :class="btnClassEnviar" :style="btnStyleEnviar" v-on:click.prevent.stop="enviar()">Enviar</button>
                            <button class="btn" :class="btnClassLimpar" :style="btnStyleLimpar" v-on:click.prevent.stop="limpar()">Limpar</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var app = new Vue({
            el: "#app",
            data:{
                titulo: "Vue JS aula 7",
                text: "Este é o curso de vue JS do Thiago Matos  " ,
                imgLogo: "https://vuejs.org/images/logo.png",
                btnClassLimpar: "btn-block btn-primary",
                btnClassEnviar: "btn-block btn-secondary",
                dataHora:  new Date().toLocaleString(),
                btnStyleEnviar: [
                    {'background-color': '#42b983' },
                    {'border-color': '#42b983' }
                ],
                btnStyleLimpar: [
                    {'background-color': '#dedede'},
                    {'border-color':'#dedede'},
                ],
                nome: "",
                usuarios: [
                    {nome:"Keven Clayton de Oliveira"},
                    {nome:"Vânia"},
                    {nome:"Buiu"},
                    {nome:"Kethellen"},
                    {nome:"Keila"},
                    {nome:"Nicole"},
                    {nome:"Fabíola"},
                ]
            },
            methods: {
                enviar(nome) {
                    alert("nome");
                },
                limpar(){
                    alert('Limpado!')
                }
            },
            filters: {
                toUpperCase(str){
                    return str.toUpperCase();
                },
                truncate(str, length){
                    var output = str;
                    if(output.length > length){
                        output = str.substring(0, length) + '...';
                    }
                    return output;
                }

            }
        });
    </script>
</body>
</html>
