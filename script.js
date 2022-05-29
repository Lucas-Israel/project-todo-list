const btnCriarTare = document.querySelector('#criar-tarefa');
const areaInput = document.querySelector('#texto-tarefa');
const listaOl = document.querySelector('#lista-tarefas');
const btnApagaTudo = document.querySelector('#apaga-tudo');
const btApgComp = document.querySelector('#remover-finalizados');
const btnSalvar = document.querySelector('#salvar-tarefas');
const lista = document.getElementsByTagName('li');
const array = [];
const array2 = [];
const btnCima = document.querySelector('#mover-cima');
const btnBaixo = document.querySelector('#mover-baixo');
const btnDel = document.querySelector('#remover-selecionado');

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

function savando() {
  array.length = 0;
  for (let index = 0; index < lista.length; index += 1) {
    array.push(lista[index].innerText);
  }
  localStorage.setItem('toDoListA', JSON.stringify(array));
  for (let index = 0; index < lista.length; index += 1) {
    array2.push(lista[index].className);
  }
  localStorage.setItem('toDoListB', JSON.stringify(array2));
}

function btnSaveTarefa() {
  btnSalvar.addEventListener('click', () => {
    localStorage.clear();
    savando();
  });
}
btnSaveTarefa();

// https://www.youtube.com/watch?v=b8sUhU_eq3g&t=1548s

function loadToDo(arriando) {
  areaInput.value = '';
  const data2 = localStorage.getItem('toDoListB');
  const LIST = JSON.parse(data2);
  for (let index = 0; index < arriando.length; index += 1) {
    const li = document.createElement('li');
    li.className = `${LIST[index]}`;
    li.appendChild(document.createTextNode(arriando[index]));
    listaOl.appendChild(li);
  }
}

window.onload = function loadPage() {
  let LIST;
  const data = localStorage.getItem('toDoListA');
  if (data) {
    LIST = JSON.parse(data);
    loadToDo(LIST);
  } else {
    LIST = [];
  }
};

function mudaCima() {
  const selected = document.querySelector('.selected');
  if (selected === null || selected.previousElementSibling === null) {
    console.log('Não é possivel subir mais');
  } else if (selected) {
    const mudando = selected.previousElementSibling;
    listaOl.insertBefore(selected, mudando);
  }
}
btnCima.addEventListener('click', mudaCima);

function mudaBaixo() {
  const selected = document.querySelector('.selected');
  if (selected === null || selected.nextElementSibling === null) {
    console.log('Não é possivel descer mais');
  } else if (selected) {
    const mudando = selected.nextElementSibling;
    listaOl.insertBefore(selected, mudando.nextElementSibling);
  }
}
btnBaixo.addEventListener('click', mudaBaixo);

// se nao adicionar o event listener fora da funcao o if nao funciona nao sei pq,
// nao sei agora que eu resolvi a questao se colocar ele dentro ia mudar algo
// mas assim esta funcionando

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

// acho que aprendi a usar o console pra me salvar dos stucks que eu tenho

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.remove();
  }
}
btnDel.addEventListener('click', removeSelected);
