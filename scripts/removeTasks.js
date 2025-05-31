import { state } from "./state.js";
import { optionsControl } from "./optionsControl.js";
import { isAllChecked } from "./checkAll.js";
import { saveTasks } from "./saveAndLoad.js";

//listener remover tarefa
const taskList = document.getElementById('tasks');
taskList.addEventListener('click', function(event) {
	const target = event.target;
	if (target.classList.contains('task-remove')) {
		let id = target.dataset.id;
		removeTask(id);
		optionsControl();
		isAllChecked();
		saveTasks();
	}
});

//função para remover tarefa
export function removeTask(id) {
	state.allTasks = state.allTasks.filter(task => task.id !== id);
	const task = document.getElementById(`task-${id}`);
	if (task) {
		//atualiza o contador de tasks marcadas
		let checkbox = document.getElementById(`task-checkbox-${id}`);
		if (checkbox.checked) {
			state.tasksChecked--;
		}		
		task.remove();
	}
}

//listener remover tudo
const buttonRemoveAll = document.getElementById('options-remove-all');
buttonRemoveAll.addEventListener('click', function(event) {
	event.preventDefault();
	if (state.allTasks.length > 0) {
		removeAllTasks();
		optionsControl();
		saveTasks();
	} else {
		alert('A lista de tarefas já está vazia')
	}
});	

//função para remover tudo
export function removeAllTasks() {
	let confirmation = confirm('Tem certeza que deseja apagar TODAS as tarefas?');
	if (confirmation) {
		document.getElementById('tasks').innerHTML = '';
		state.allTasks = [];
		state.tasksChecked = 0;
		document.getElementById('options-all').checked = false;
		localStorage.clear();
		console.log('Tasks & localStorage cleaned');
	}
}