var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest(); // inicializando nossa requisição

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // configurando requisição

  xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200){
      erroAjax.classList.add("invisivel"); //oculta erro
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta); // transforma a resposta da minha requisição em um objeto

      pacientes.forEach(function(paciente){ // pecorre cada objeto do JSON
        adicionaPacienteNaTabela(paciente); // reaproveitando código montaTr

      });
    } else {
      erroAjax.classList.remove("invisivel"); // aparece erro
    }

  });

  xhr.send(); // envio da requisição

});
