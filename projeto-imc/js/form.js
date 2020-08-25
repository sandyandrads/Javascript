var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();  // preve ação padrão do navegador

    var form = document.querySelector("#form-adiciona");  // busca elemento form no html conhecido como form-adiciona

    var paciente = obtemPacienteDoFormulario(form); // obtem formulario feito dentro da funcao obtemPacienteDoFormulario

    var pacienteTr = montaTr(paciente); // monta tr

    var erros = validaPaciente(paciente); // validacoes de if com peso, altura, gordura

    if (erros.length > 0){ // se a string for maior que zero tem erro e busca arrays dos erros
      exibeMensagensDeErro(erros);
      return; // se for o caso de cair neste if saira da funcao sem efetuar registro na tabela
    }

    adicionaPacienteNaTabela(paciente);

    // var tabela = document.querySelector("#tabela-pacientes"); // se nao cair no if cria a tabela com novo item

    // tabela.appendChild(pacienteTr); // insere o item dentro da tabela

    form.reset(); // reseta formulario

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // remove mensagens toda vez que recarregar a pagina
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {

    var paciente = { // para melhor organizacao cria-se o objeto
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; // retorna o objeto paciente com as caracteristicas
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function validaPaciente(paciente) {

  var erros = [];

  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco");
  }

  if (paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0){
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0){
    erros.push("A altura não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é invalido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é invalida");
  }

  return erros;
}


function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
