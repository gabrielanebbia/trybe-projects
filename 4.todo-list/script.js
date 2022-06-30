const inputTask = document.getElementById('texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');
const selectedTask = document.querySelector('.backgroundItem');

const AddTaskButton = document.getElementById('criar-tarefa');
AddTaskButton.addEventListener('click', function addITaskList() {
  const newTask = document.createElement('li');
  toDoList.appendChild(newTask);
  newTask.innerHTML = inputTask.value;
  inputTask.value = '';
});

function selectTask() {
  const toDoList = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < toDoList.length; index += 1) {
    toDoList[index].addEventListener('click', function backgroundColorItem(event) {
      const selectedTask = document.querySelectorAll('.backgroundItem');
      for (let index2 = 0; index2 < selectedTask.length; index2 += 1) {
        selectedTask[index2].classList.remove('backgroundItem');
      }
      event.target.classList.add('backgroundItem');
    });
  }
}
selectTask();

function scratchCompletedItem() {
  const toDoList = document.querySelectorAll('#lista-tarefas');
  for (let index = 0; index < toDoList.length; index += 1) {
    toDoList[index].addEventListener('dblclick', function marked(event) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
scratchCompletedItem();

const deleteListButton= document.getElementById('apaga-tudo');
deleteListButton.addEventListener('click', function deleteAllList() {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    toDoList.removeChild(tasks[index]);
  }
});

const deleteCompletedTasksButton = document.getElementById('remover-finalizados');
deleteCompletedTasksButton.addEventListener('click', function deleteFinalized() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('completed')) {
      toDoList.removeChild(task[index]);
    }
  }
});

const saveListButton = document.getElementById('salvar-tarefas');
saveListButton.addEventListener('click', function saveList() {
  const listValue = toDoList.innerHTML;
  localStorage.saveList = listValue;
});

function getSavedList() {
  if (localStorage.saveList !== undefined) {
    toDoList.innerHTML = localStorage.saveList;
  }
}
getSavedList();

function moveElementUp() {
  const moveUpButton = document.getElementById('mover-cima');
  moveUpButton.addEventListener('click', function moveUp() {
    const selected = document.getElementsByClassName('backgroundItem')[0];
    if (selected && selected.previousElementSibling !== null) {
      toDoList.insertBefore(selected, selected.previousElementSibling);
    }
  });
}
moveElementUp();

function moveElementDown() {
  const moveDownButton = document.getElementById('mover-baixo');
  moveDownButton.addEventListener('click', function moveDown() {
    const selected = document.getElementsByClassName('backgroundItem')[0];
    if (selected && selected.nextElementSibling !== null) {
      toDoList.insertBefore(selected.nextElementSibling, selected);
    }
  });
}
moveElementDown();

/* Referências para a condição especial do requisito 13:
https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling - (caso o elemento seja o ultimo retorna null)
https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
https://www.w3schools.com/js/js_htmldom_navigation.asp
https://www.w3schools.com/js/js_htmldom_elements.asp */

const deleteTaskButton = document.getElementById('remover-selecionado');
deleteTaskButton.addEventListener('click', function removeItem() {
  const selectedTask = document.querySelector('.backgroundItem');
  toDoList.removeChild(selectedTask);
});
