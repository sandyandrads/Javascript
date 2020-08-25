//consulta dos inputs
function acessarCamposInput() {
  nome = $("#nome").val(); //
  valorProjeto = $("#inserir-valor-projeto").val(); // valor input valor do Projeto
  diasEfetivos = $("#inserir-dias-efetivos").val(); // valor input dias efetivos
  horasDedicadas = $("#inserir-horas-dedicadas").val(); // valor input horas dedicadas
  diasFerias = $("#inserir-dias-ferias").val(); // valor input dias ferias
}

// validação de campos vazios
function camposVazios() {

  acessarCamposInput(); // consulta nossos campos do formulario

    if(nome == "") {
      alert("Para melhorar nossa interação, digite seu nome :)");
      limpaCampo();
    }

    if(valorProjeto == "" || diasEfetivos == "" || horasDedicadas == ""){
      alert("Não esqueça de preencher os campos :)");
      limpaCampo();
    }
  };


  // variavel limpa campos //

function limpaCampo() {
  $("#nome").val("");
  $("#inserir-valor-projeto").val("");
  $("#inserir-dias-efetivos").val("");
  $("#inserir-horas-dedicadas").val("");
  $("#inserir-dias-ferias").val("");
};
