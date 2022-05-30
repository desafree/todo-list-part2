export { displayCommand };

// TODO add functionality:change priority, change note + add note, add functionality on project click

const displayCommand = (function displayCommand() {
  return { displayTodos, createProjectsList };

  function displayTodos(todosArray) {
    removeTodos();
    todosArray.forEach(createAndAppendTodo);
  }

  function removeTodos() {
    const todosContainer = document.querySelector(".todos-container");
    todosContainer.textContent = "";
  }

  function createAndAppendTodo(todo) {
    const todosContainer = document.querySelector(".todos-container");

    const todoBox = document.createElement("div");
    todoBox.classList.add("todo");
    todosContainer.appendChild(todoBox);

    const h3Todo = document.createElement("h3");
    h3Todo.classList.add("title");
    h3Todo.textContent = todo.title;
    todoBox.appendChild(h3Todo);

    const pTodo = document.createElement("p");
    pTodo.classList.add("description");
    pTodo.textContent = todo.description;
    todoBox.appendChild(pTodo);

    const dateTodo = document.createElement("h4");
    dateTodo.classList.add("date");
    dateTodo.textContent = todo.dueDate;
    todoBox.appendChild(dateTodo);

    const proprityTodo = document.createElement("h4");
    proprityTodo.classList.add("priority");
    proprityTodo.textContent = todo.priority;
    todoBox.appendChild(proprityTodo);

    // TODO notes
    // const proprityTodo = document.createElement("h4")
    // proprityTodo.classList.add("priority")
    // proprityTodo.textContent = todo.priority
    // todoBox.appendChild(proprityTodo)

    const checkTodo = document.createElement("input");
    checkTodo.addEventListener("click", () => {
      todo.toggleChecklist();
    });
    checkTodo.setAttribute("type", "checkbox");
    checkTodo.setAttribute("id", "check");
    todoBox.appendChild(checkTodo);

    const projectTodo = document.createElement("h5");
    projectTodo.classList.add("project");
    projectTodo.textContent = todo.project;
    todoBox.appendChild(projectTodo);
  }

  function createProjectsList(projects) {
    removeProjects();
    projects.forEach(createProjectLink);
  }

  function removeProjects() {
    const projectList = document.querySelector("ul");
    projectList.textContent = "";
  }

  function createProjectLink(projectName) {
    const projectList = document.querySelector("ul");

    const projectItem = document.createElement("li");
    projectItem.textContent = projectName;
    projectList.appendChild(projectItem);
  }
})();

{
  /* <nav>
      <h2>Projects:</h2>
      <ul>
        <li>Project 1</li> */
}

{
  /* <div class="todo">
<h3 class="title">Title</h3>
<p class="description">Description</p>
<h4 class="date">Due Date</h4>
<h4 class="priority">Priority</h4>
// <ul class="notes">
//   <li>Note1</li>
// </ul>
<input type="checkbox" id="check" />
<h5 class="project">Project</h5> */
}
