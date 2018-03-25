// importar
var express = require('express');

// instanciar
var app = express();

// Static files
app.use(express.static(__dirname + '/components/BoilerplatePolymer'));
app.use(express.static(__dirname + '/components/Web-Components'));
app.use(express.static(__dirname + '/img'));

// ruteo
app.get('/basic-polymer-component', function(req, res){
  res.sendFile(__dirname + '/components/BoilerplatePolymer/index.html');
});
app.get('/simple-web-component', function(req, res){
  res.sendFile(__dirname + '/components/Web-Component/index.html');
});

// escuchar
app.listen(9000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);