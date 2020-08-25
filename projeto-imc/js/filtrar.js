var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){ // detecta quando o usuário digita no campo

  var pacientes = document.querySelectorAll(".paciente"); // seleciono todos meus pacientes

    if (this.value.length > 0){
      for ( var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]; // pecorrendo todos os pacientes

        var tdNome = paciente.querySelector(".info-nome"); // seleciono o id info-nome dos pacientes
        var nome = tdNome.textContent; // extraior o valor dentro do id

        var expressao = new RegExp(this.value, "i"); // adiciono minha expressão regular com case insensitive

        if (expressao.test(nome)) { // comparo nome com a minha expressao regular
          paciente.classList.remove("invisivel"); // se encontrar removo invisivel
        } else {
          paciente.classList.add("invisivel"); // se nao encontrar acrescento invisivel
        }
      }
    }  else { // responsável por remover invisivel quando filtro de busca é limpado
      for ( var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i];
        paciente.classList.remove("invisivel");
      }
    }
});
