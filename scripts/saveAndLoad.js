import { state } from "./state.js";
import { renderTask } from "./addTask.js";
import { isAllChecked } from "./checkAll.js";
import { optionsControl } from "./optionsControl.js";
import { filterApply } from "./filters.js";
import { loadTheme } from "./darkMode.js";

//função para salvar tarefas
export function saveTasks() {
	localStorage.setItem('tasks', JSON.stringify(state.allTasks));
	localStorage.setItem('tasksChecked', JSON.stringify(state.tasksChecked));
	localStorage.setItem('theme', JSON.stringify(state.theme));
	console.log('localStorage saved');
}

//função carregar
export function loadTasks() {
	//carregar dados
	const savedTasks = localStorage.getItem('tasks');
	if (savedTasks) {
		document.getElementById('tasks').innerHTML = '';
		state.allTasks = JSON.parse(savedTasks);
		state.allTasks.forEach(task => renderTask(task));
	}

	//carregar contador de tasks marcadas
	const counterCheckedTasks = Number(localStorage.getItem('tasksChecked'));
	if (counterCheckedTasks) {
		state.tasksChecked = counterCheckedTasks;
	}

	//carrega preferencia de tema
	const savedTheme = JSON.parse(localStorage.getItem('theme'));
	if (savedTheme === 'dark') {
		loadTheme();
	}	

	//ações extras
	isAllChecked();
	optionsControl();
	filterApply();

	console.log('localStorage loaded');
}