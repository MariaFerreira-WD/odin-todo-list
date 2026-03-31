export function renderProjects(projects) {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";
    
    
      projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.name;
        li.addEventListener('click', () => onProjectClick(project));
        projectList.appendChild(li);
    });

}

export function renderTodos(todos) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML= "";

todos.forEach(todos => {
    const li = document.createElement("li");
    li.textContent = todos.title;
    todoList.appendChild(li);
})

}



