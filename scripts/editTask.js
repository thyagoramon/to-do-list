import { state } from "./state.js";
import { saveTasks } from "./saveAndLoad.js";

let id = '';
let currentContent = [];
const editScreen = document.getElementById('edit_task');
const backdrop = document.getElementById('backdrop');
const titleInput = document.getElementById('edit-title');
const descriptionInput = document.getElementById('edit-description');
const btnConfirm = document.getElementById('edit-confirm');
const btnCancel = document.getElementById('edit-cancel');

//abrir janela de edição ao clicar no botão
const taskList = document.getElementById('tasks');
taskList.addEventListener('click', function(event) {
	const target = event.target;
	if (target.classList.contains('task-edit')) {
		event.preventDefault();
		id = target.dataset.id;
		editTask(id);
	}
});

export function editTask(id) {
	state.editMode = true;
	currentContent = state.allTasks.find(task => task.id === id);
	titleInput.value = `${currentContent.title}`;
	descriptionInput.value = `${currentContent.description}`;
	editScreen.style.display = 'flex';
	backdrop.style.display = 'block';	
}

//confirmar clicando no botão
btnConfirm.addEventListener('click', function(event) {
	event.preventDefault();		
	confirmEdit(id);
});

//confirmar pressionando enter
document.addEventListener('keydown', function(event) {
	if (state.editMode === true && event.key === 'Enter') {
		event.preventDefault();
		confirmEdit(id);
	}
});

//cancelar clicando no botão
	btnCancel.addEventListener('click', function(event) {
		event.preventDefault();
		cancelEdit();
	});

//cancelar pressionando esc
document.addEventListener('keydown', function(event) {
	if (state.editMode === true && event.key === 'Escape') {
		event.preventDefault();
		cancelEdit();
	}
});

//função para confirmar edição e atualizar conteúdo
function confirmEdit(id) {
	let newTitle = titleInput.value.trim();
	let newDescription = descriptionInput.value.trim();
	currentContent.title = newTitle;
	currentContent.description = newDescription;

	document.getElementById(`task-title-${id}`).innerText = newTitle;
	document.getElementById(`task-description-${id}`).innerText = newDescription;

	cancelEdit();
	saveTasks();
}

//função para cancelar edição
function cancelEdit() {
	let confirmation = confirm('Descartar alterações?');
	if (confirmation) {
		editScreen.style.display = 'none';
		backdrop.style.display = 'none';
		currentContent = [];
		titleInput.value = '';
		descriptionInput.value = '';
		state.editMode = false;
	}
}

//cancelar ao clicar no backdrop
backdrop.addEventListener('click', ()=> {
	cancelEdit();
});