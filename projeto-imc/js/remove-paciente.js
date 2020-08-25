var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {

  if (event.target.tagName == 'TD') { //compara tag do evento. 
    event.target.parentNode.classList.add("fadeOut"); // adiciona classe ao pai do elemento clicado

      setTimeout(function(){
        event.target.parentNode.remove(); // pai do elemento deletado em 500 milisegundos
      }, 500);
  }

});
