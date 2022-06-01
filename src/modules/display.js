import { format } from 'date-fns';
import { todoArray } from './todoArray.js';

export { displayCommand };

// TODO add functionality:change priority, change note + add note, add functionality on project click

const displayCommand = (function displayCommand() {
  return { displayTodos, createProjectsList };

  function displayTodos(todosArray) {
    removeTodos();
    todosArray.forEach(createAndAppendTodo);
  }

  function removeTodos() {
    const todosContainer = document.querySelector('.todos-container');
    todosContainer.textContent = '';
  }

  function createAndAppendTodo(todo) {
    const todosContainer = document.querySelector('.todos-container');

    const todoBox = document.createElement('div');
    todoBox.classList.add('todo');
    todosContainer.appendChild(todoBox);

    const hidden = document.createElement('div');
    hidden.classList.add('hidden');

    const h3Todo = document.createElement('h3');
    h3Todo.classList.add('title');
    h3Todo.textContent = todo.title;
    todoBox.appendChild(h3Todo);

    const pTodo = document.createElement('p');
    pTodo.classList.add('description');
    pTodo.textContent = todo.description;
    hidden.appendChild(pTodo);

    const dateTodo = document.createElement('h4');
    dateTodo.classList.add('date');
    dateTodo.textContent = format(new Date(todo.dueDate), 'eeee d');
    todoBox.appendChild(dateTodo);

    const proprityTodo = document.createElement('h4');
    proprityTodo.classList.add('priority');
    proprityTodo.textContent = todo.priority;
    hidden.appendChild(proprityTodo);
    todoBox.classList.add(`level${todo.priority}`);

    const buttonUp = document.createElement('button');
    buttonUp.classList.add('plus');
    buttonUp.textContent = '+';
    proprityTodo.appendChild(buttonUp);
    buttonUp.addEventListener('click', () => {
      todoBox.classList.remove(`level${todo.priority}`);
      todo.changePriority(Number(todo.priority) + 1);
      proprityTodo.childNodes[0].nodeValue = todo.priority;
      todoBox.classList.add(`level${todo.priority}`);
      // displayTodos(todoArray.getAllTodo());
    });

    const buttonDown = document.createElement('button');
    buttonDown.classList.add('minus');
    buttonDown.textContent = '-';
    proprityTodo.appendChild(buttonDown);
    buttonDown.addEventListener('click', () => {
      todoBox.classList.remove(`level${todo.priority}`);
      todo.changePriority(Number(todo.priority) - 1);
      proprityTodo.childNodes[0].nodeValue = todo.priority;
      todoBox.classList.add(`level${todo.priority}`);
      // displayTodos(todoArray.getAllTodo());
    });

    // TODO notes
    // const proprityTodo = document.createElement("h4")
    // proprityTodo.classList.add("priority")
    // proprityTodo.textContent = todo.priority
    // todoBox.appendChild(proprityTodo)

    const checkTodo = document.createElement('input');
    checkTodo.addEventListener('click', () => {
      todo.toggleChecklist();
      todoBox.classList.toggle('checked');
    });
    checkTodo.setAttribute('type', 'checkbox');
    checkTodo.setAttribute('id', 'check');
    todoBox.appendChild(checkTodo);

    const projectTodo = document.createElement('h5');
    projectTodo.classList.add('project');
    projectTodo.textContent = todo.project;
    hidden.appendChild(projectTodo);

    const dropdown = document.createElement('button');
    dropdown.classList.add('dropdown');
    dropdown.textContent = 'more';
    proprityTodo.appendChild(dropdown);
    dropdown.addEventListener('click', () => {
      hidden.classList.toggle('open');
      // displayTodos(todoArray.getAllTodo());
    });
    todoBox.appendChild(dropdown);

    todoBox.appendChild(hidden);

    const deleteTodo = document.createElement('button');
    deleteTodo.classList.add('delete');
    deleteTodo.textContent = 'DELETE';
    deleteTodo.addEventListener('click', () => {
      todo.deleteTodo();
      displayTodos(todoArray.getAllTodo());
      createProjectsList(todoArray.getProjectsName());
    });
    hidden.appendChild(deleteTodo);
  }

  function createProjectsList(projects) {
    removeProjects();
    const projectList = document.querySelector('ul');
    const projectItem = document.createElement('li');
    projectItem.textContent = 'All';
    projectList.appendChild(projectItem);
    projectItem.addEventListener('click', (e) => {
      const allItem = document.querySelectorAll('li');
      allItem.forEach((item) => {
        item.classList.remove('active');
      });
      projectItem.classList.add('active');
      displayTodos(todoArray.getAllTodo());
    });
    projects.forEach(createProjectLink);
  }

  function removeProjects() {
    const projectList = document.querySelector('ul');
    projectList.textContent = '';
  }

  function createProjectLink(projectName) {
    if (projectName !== 'none') {
      const projectList = document.querySelector('ul');
      const projectItem = document.createElement('li');
      projectItem.textContent = projectName;
      projectItem.addEventListener('click', (e) => {
        const allItem = document.querySelectorAll('li');
        allItem.forEach((item) => {
          item.classList.remove('active');
        });
        projectItem.classList.add('active');
        displayTodos(todoArray.getProjectTodo(e.target.textContent));
      });
      projectList.appendChild(projectItem);
    }
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
