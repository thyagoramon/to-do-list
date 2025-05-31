import { state } from "./state.js";
import { filterApply } from "./filters.js";
import { isAllChecked } from "./checkAll.js";
import { saveTasks } from "./saveAndLoad.js";

//listener marcar/desmarcar tarefa
const taskList = document.getElementById('tasks');
taskList.addEventListener('change', function(event) {
	const target = event.target;
	if (target.classList.contains('task-checkbox')) {
		let id = target.dataset.id;
		updateTask(id);
		filterApply();
		isAllChecked();
		saveTasks();
	}
});

//função de atualização de status
export function updateTask(id) {
	let checkbox = document.getElementById(`task-checkbox-${id}`);
	let content = document.getElementById(`task-content-${id}`);
	let task = document.getElementById(`task-${id}`);

	if (checkbox.checked) {
		task.dataset.status = "completed";
		content.classList.remove('task-pending');
		content.classList.add('task-completed');
		
		//atualiza contador de tasks marcadas
		state.tasksChecked++;
		
		//atualiza array
		const update = state.allTasks.find(task => task.id === id);
		if (update) {
			update.status = "completed";
		}
	} else {
		task.dataset.status = "pending";
		content.classList.remove('task-completed');
		content.classList.add('task-pending');

		//atualiza contador de tasks marcadas
		state.tasksChecked--;

		//atualiza array
		const update = state.allTasks.find(task => task.id === id);
		if (update) {
			update.status = "pending";
		}
	}
}