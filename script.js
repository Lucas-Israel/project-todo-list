const btnCriarTare = document.querySelector('#criar-tarefa');
const areaInput = document.querySelector('#texto-tarefa');
const listaOl = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btApgComp = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
// let listaLoad = document.querySelector('#lista-tarefas');

function addNaLi() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(areaInput.value));
  listaOl.appendChild(li);
}

// adiciona uma li nova com um txt do area input /\

btnCriarTare.addEventListener('click', () => {
  addNaLi();
  areaInput.value = '';
});

// ouve o botao criar tarefa /\

function seletorDeClasse() {
  listaOl.addEventListener('click', (event) => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach((element) => {
      element.classList.remove('selected');
    });
    event.target.classList.add('selected');
  });
}
seletorDeClasse();

// seletor de classe nas listas /\

function completed() {
  listaOl.addEventListener('dblclick', (event) => {
    if (event.target.className === 'completed selected') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
completed();

// transforma em 2 cliques alguem da li em completed /\

function apagaTudo() {
  btnApagaTudo.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].remove();
    }
  });
}
apagaTudo();

// botao de apagar tudo /\

function apagaCompleto() {
  btApgComp.addEventListener('click', () => {
    const completos = document.querySelectorAll('.completed');
    for (let i = 0; i < completos.length; i += 1) {
      completos[i].remove();
    }
  });
}
apagaCompleto();

// botao que apaga todos os com classe completo /\

function btnSaveTarefa() {
  btnSalvar.addEventListener('click', () => {
    const saveList = document.querySelector('ol');
    localStorage.setItem('listaOl', saveList);
  });
}
btnSaveTarefa();

// const savedUl = localStorage.getItem('listaOl');
// listaLoad = savedUl;
