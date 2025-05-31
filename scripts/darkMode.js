import { state } from "./state.js";
import { saveTasks } from "./saveAndLoad.js";

const darkModeBtn = document.getElementById('dark-mode');
darkModeBtn.addEventListener('click', function(event) {
	event.preventDefault();
	loadTheme();
});

export function loadTheme() {
	if (state.theme === 'light') {
		document.body.classList.add('dark-mode');
		darkModeBtn.innerText = 'Modo claro';
		state.theme = 'dark';
	} else if (state.theme === 'dark') {
		document.body.classList.remove('dark-mode');
		darkModeBtn.innerText = 'Modo escuro';
		state.theme = 'light';
	}
	saveTasks();
}