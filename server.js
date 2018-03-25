// importar
var express = require('express');

// instanciar
var app = express();

// ruteo
app.get('/basic-polymer-component', function(req, res){
  res.sendFile(__dirname + '/BoilerplatePolymer/index.html');
});
app.get('/simple-web-component', function(req, res){
  res.sendFile(__dirname + '/Web-Component/index.html');
});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);