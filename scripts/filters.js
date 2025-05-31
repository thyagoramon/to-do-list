import { state } from "./state.js";
import { renderTask } from "./addTask.js";

//	todas as tarefas
const buttonAll = document.getElementById('options-filters-all');
buttonAll.addEventListener('click', function(event) {
	event.preventDefault();
	state.filterMode = 'all';
	filterApply();
});

//	tarefas completas
const buttonCompleted = document.getElementById('options-filters-completed');
buttonCompleted.addEventListener('click', function(event) {
	event.preventDefault();
	state.filterMode = 'completed';
	filterApply();
});

//	tarefas pendentes
const buttonPending = document.getElementById('options-filters-pending');
buttonPending.addEventListener('click', function(event) {
	event.preventDefault();
	state.filterMode = 'pending';
	filterApply();
});

export function filterApply() {
	const taskList = document.getElementById('tasks');	

	switch (state.filterMode) {
		case 'all':
			taskList.innerHTML = '';
			buttonAll.classList.remove('filter-desabled');
			buttonCompleted.classList.add('filter-desabled');
			buttonPending.classList.add('filter-desabled');
			state.allTasks.forEach(task => renderTask(task));
			break;
		case 'completed':
			taskList.innerHTML = '';
			buttonAll.classList.add('filter-desabled');
			buttonCompleted.classList.remove('filter-desabled');
			buttonPending.classList.add('filter-desabled');
			let tasksCompleted = state.allTasks.filter(task => task.status === 'completed');
			tasksCompleted.forEach(task => renderTask(task));
			break;
		case 'pending':
			taskList.innerHTML = '';
			buttonAll.classList.add('filter-desabled');
			buttonCompleted.classList.add('filter-desabled');
			buttonPending.classList.remove('filter-desabled');
			let tasksPending = state.allTasks.filter(task => task.status === 'pending');
			tasksPending.forEach(task => renderTask(task));
			break;
	}
}