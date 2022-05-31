import { format, formatDistance, formatRelative, subDays } from "date-fns";
import TodoConstructor from "./modules/TodoConstructor.js";
import { todoArray } from "./modules/todoArray.js";
import { displayCommand } from "./modules/display.js";
import updateLocalStorage from "./modules/localStorage.js";
import "./style.scss";

// const localStorageArray = JSON.parse(localStorage.getItem("localStorageArray"));

// localStorageArray.forEach((todo) => {
//   const todoToBeAdded = new TodoConstructor(todo);
//   todoArray.addTodo(todoToBeAdded);
// });

const default1 = new TodoConstructor({
  title: "prova",
  description: "prova description",
  dueDate: new Date(),
  priority: 1,
  project: "provaProject",
});
const default2 = new TodoConstructor({
  title: "prova",
  description: "prova description",
  dueDate: new Date(),
  priority: 1,
  project: "provaProject2",
});

todoArray.addTodo(default1);
todoArray.addTodo(default2);

const addTodoForm = document.querySelector(".form-container form");
addTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = addTodoForm.title.value;
  const description = addTodoForm.description.value;
  const dueDate = new Date(addTodoForm.dueDate.value);
  const priority = Number(addTodoForm.priority.value);
  const check = addTodoForm.check.checked;
  const project = addTodoForm.project.value || "none";

  const todoToBeAdded = new TodoConstructor({
    title,
    description,
    dueDate,
    priority,
    check,
    project,
  });
  // updateLocalStorage(todoToBeAdded);
  todoArray.addTodo(todoToBeAdded);
  displayCommand.displayTodos(todoArray.getAllTodo());
  addTodoForm.reset();
  displayCommand.createProjectsList(todoArray.getProjectsName());
});

displayCommand.displayTodos(todoArray.getAllTodo());
displayCommand.createProjectsList(todoArray.getProjectsName());
