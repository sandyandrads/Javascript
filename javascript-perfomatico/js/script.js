window.addEventListener('load', start);

const clickArray = []; // criação do estado da aplicação

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  const now = new Date();
  clickArray.push(getNewTimestamp());

  render();
}

function render() {
  const ul = document.querySelector('#data');
  ul.innerHTML = '';

  let lis = '';

  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });

  ul.innerHTML = lis;

  document.title = clickArray.length;
}
