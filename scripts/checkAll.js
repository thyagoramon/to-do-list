import { state } from "./state.js";
import { updateTask } from "./updateTask.js";
import { filterApply } from "./filters.js";
import { saveTasks } from "./saveAndLoad.js";

//listener marcar/desmarcar tudo
const checkboxAll = document.getElementById('options-all');
checkboxAll.addEventListener('click', ()=> {
	if (checkboxAll.checked) {
		checkAllTasks();
	} else {
		uncheckAllTasks();
	}
	filterApply();
	saveTasks();
});

//função para marcar todos
export function checkAllTasks() {
	let checkboxes = document.querySelectorAll('.task-checkbox');
	checkboxes.forEach(checkbox => {
		if (!checkbox.checked) {
			checkbox.checked = true;
			let id = checkbox.dataset.id;
			updateTask(id);
		}	
	});
}

//função para desmarcar todos
export function uncheckAllTasks() {
	let checkboxes = document.querySelectorAll('.task-checkbox');
	checkboxes.forEach(checkbox => {
		if (checkbox.checked) {
			checkbox.checked = false;
			let id = checkbox.dataset.id;
			updateTask(id);
		}			
	});
}

//função para verificar se tudo está marcado
export function isAllChecked() {
	const checkboxAll = document.getElementById('options-all');
	if (state.tasksChecked === state.allTasks.length) {
		checkboxAll.checked = true;
	} else {
		checkboxAll.checked = false;
	}
}