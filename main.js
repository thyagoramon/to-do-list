import "./scripts/state.js";
import "./scripts/addTask.js";
import "./scripts/updateTask.js";
import "./scripts/checkAll.js";
import "./scripts/removeTasks.js";
import "./scripts/filters.js";
import "./scripts/editTask.js";
import "./scripts/darkMode.js";
import { loadTasks } from "./scripts/saveAndLoad.js";
import { optionsControl } from "./scripts/optionsControl.js";
import { isAllChecked } from "./scripts/checkAll.js";

//ao carregar a página
document.addEventListener('DOMContentLoaded', ()=> {
	loadTasks();
	isAllChecked();
	optionsControl();
});
