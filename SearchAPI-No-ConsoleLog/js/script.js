console.log('Oi!');

window.addEventListener('load', (start) => {
  console.log('aqui');
  fetchJson();
  search();
});

let result = null;
let globalContacts = null;
let buscarNomes = null;
let divBuscaNomes = document.querySelector('#Resultado-filtro');

// chamar api + campos mapeados nome, idade, avatar, genero
async function fetchJson() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();

  globalContacts = json.results.map(({ name, dob, picture, gender }) => {
    return {
      nome: name.first,
      sobrenome: name.last,
      idade: dob.age,
      avatar: picture.thumbnail,
      sexo: gender,
    };
  });
  doFilter(); // temporario remover apos implementar settimeout
}

// metodo para filtrar
function search() {
  document.querySelector('#filtro').addEventListener('keyup', (searchNames) => {
    buscarNomes = event.target.value;
    console.log(buscarNomes);
    doFilter();
  });
}

//vincular filtro com json
function doFilter() {
  const inputNomes = globalContacts.filter((nome) => {
    return nome.nome.indexOf(buscarNomes) >= 0
      ? true
      : false || nome.sobrenome.indexOf(buscarNomes) >= 0
      ? true
      : false;
  });
  console.log(inputNomes);
  stats(inputNomes); // chamar estatisticas ao final do filtro
}

//estatisticas
function stats(inputNomes) {
  let totalSexoMasculino = 0;
  let totalSexoFeminino = 0;
  let somaIdade = 0;
  let mediaIdade = 0;

  inputNomes.forEach((person) => {
    if (person.sexo === 'male') {
      totalSexoMasculino += 1;
    } else if (person.sexo === 'female') {
      totalSexoFeminino += 1;
    }
    somaIdade += person.idade;
  });

  mediaIdade = somaIdade / inputNomes.length;

  console.log('Masculino: ' + totalSexoMasculino);
  console.log('Feminino: ' + totalSexoFeminino);
  console.log('Soma das idades: ' + somaIdade);
  console.log('Medida das idades: ' + mediaIdade.toFixed(2));
}
