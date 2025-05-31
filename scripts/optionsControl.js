import { state } from "./state.js";

const options = document.getElementById('options');

export function optionsControl() {
	if (state.allTasks.length > 0) {
		options.style.display = 'flex';
	} else {
		options.style.display = 'none';
	}
}