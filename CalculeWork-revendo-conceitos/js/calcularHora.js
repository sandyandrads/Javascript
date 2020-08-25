// meu unico botao //
var botao = $("#botao-enviar");

// variaveis //
var nome = {};
var valorProjeto = {};
var diasEfetivos = {};
var horasDedicadas = {};
var diasFerias = {};
var valorHora = {};

// ao clicar o botão, principais funções executam
botao.click(function() {
  calcularHora();
  campoOculto();
});

// calculo de horas
function calcularHora() {

  acessarCamposInput(); // consulta nossos campos do formulario
  camposVazios(); // aciona alertas em caso de campo vazio

  valorHora = (valorProjeto / (diasEfetivos * 4 * horasDedicadas)) + (diasFerias * diasEfetivos * horasDedicadas);
  valorHora = (valorHora.toFixed(2));
};

function campoOculto() {
  setTimeout (function(){
  $("#resposta").toggle();
  }, 1500);

  var campoNome = $("#mostrar-nome");
  campoNome.html("<p> Olá @"+ nome + "!</p>");

  var campoValor = $("#mostrar-valorHora");
  campoValor.html("<p> R$" + valorHora + " :)</p>");
  setTimeout (function(){
    botao.html('<style> #botao-enviar {display: none;} </style>');
  },1500);
};
