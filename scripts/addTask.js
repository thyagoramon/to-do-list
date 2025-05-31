import { state } from "./state.js";
import { optionsControl } from "./optionsControl.js";
import { isAllChecked } from "./checkAll.js";
import { saveTasks } from "./saveAndLoad.js";

//adcionar tarefa ao clicar no botão
const buttonNewTask = document.getElementById('new_task-button');
buttonNewTask.addEventListener('click', function(event) {
	event.preventDefault();
	addTask();	
});

//adicionar tarefa ao pressionar Enter
document.addEventListener('keydown', function(event) {
	if (state.editMode === false && event.key === 'Enter') {
		event.preventDefault();
		addTask();
	}
});

//função para add tarefa
export function addTask() {
	let inputTitle = document.getElementById('new_task-title');
	let inputDescription = document.getElementById('new_task-description');
	let title = inputTitle.value.trim();
	let description = inputDescription.value.trim();
	
	
	if (title !== '' && description !== '') {
		let id = generateId();

		let data = {
			id: id,
			title: title,
			description: description,
			status: 'pending'
		}

		state.allTasks.push(data); //adiciona dados no array

		renderTask(data); //renderiza a task

		inputTitle.value = '';
		inputDescription.value = '';

		optionsControl();
		isAllChecked();
		saveTasks();
	} else {
		alert('Preencha o título e a descrição da tarefa');
	}
}

//função para gerar id da tarefa
function generateId() {
	return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

//função para renderizar tarefa
export function renderTask(data) {		
	const taskCode = `
		<div id="task-${data.id}" class="task-div" data-status="pending">
			<input id="task-checkbox-${data.id}" class="task-checkbox" data-id="${data.id}" type="checkbox">
			<div id="task-content-${data.id}" class="task-content task-pending">
				<p id="task-title-${data.id}" class="task-title">${data.title}:</p>
				<p id="task-description-${data.id}" class="task-description">${data.description}</p>
			</div>
			<div class="task-buttons">
				<button class="task-edit btn btn-type-b" data-id="${data.id}">Editar</button>
				<button class="task-remove btn btn-type-b" data-id="${data.id}">Remover</button>
			</div>
		</div>
	`;
	
	document.getElementById('tasks').insertAdjacentHTML('beforeend', taskCode);

	//verificação se a tarefa está checked ao carregar
	if (data.status === 'completed') {
		//marca o checkbox
		let checkbox = document.getElementById(`task-checkbox-${data.id}`);
		checkbox.checked = true;

		//add a classe de estilização
		let content = document.getElementById(`task-content-${data.id}`);
		content.classList.add('task-completed');
	}
}