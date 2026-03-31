import { Project, defaultProject } from './projects.js';
import { Todo } from './todos.js';
import { renderProjects, renderTodos } from './ui.js';

const projects = [defaultProject()];

let activeProject = projects[0];

renderProjects(projects, (project) => {
    activeProject = project;
    renderTodos(activeProject.todos);
});

// Create new project
let addProject = document.getElementById("add-project-btn");
addProject.addEventListener("click", () => {
    const newProject = new Project(prompt("Insert the project name"));
    projects.push(newProject);
    renderProjects(projects, onProjectClick);
    });

    function onProjectClick(project) {
    activeProject = project;
    renderTodos(activeProject.todos);
}



// Create new todo
let addTodo = document.getElementById("add-todo-btn");
addTodo.addEventListener("click", () => {
    const newTodo = new Todo(prompt("Insert Todo"));
    activeProject.addTodo(newTodo);
    renderTodos(activeProject.todos);
});
