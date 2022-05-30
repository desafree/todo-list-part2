import { format, formatDistance, formatRelative, subDays } from "date-fns";
import TodoConstructor from "./modules/TodoConstructor.js";
import { todoArray } from "./modules/todoArray.js";
import "./style.scss";

const localStorageUpdatedArray = [
  {
    title: "prova",
    description: "prova description",
    dueDate: format(new Date(), "eeee"),
    priority: 1,
    project: "provaProject",
  },
  {
    title: "prova",
    description: "prova description",
    dueDate: format(new Date(), "eeee"),
    priority: 1,
    project: "provaProject",
  },
  {
    title: "prova",
    description: "prova description",
    dueDate: format(new Date(), "eeee"),
    priority: 1,
  },
];

// updateLocalStorage({
//   title: "prova",
//   description: "prova description",
//   dueDate: format(new Date(), "eeee"),
//   priority: 1,
// });

const localStorageArray = JSON.parse(localStorage.getItem("localStorageArray"));

localStorageArray.forEach((todo) => {
  const todoToBeAdded = new TodoConstructor(todo);
  todoArray.addTodo(todoToBeAdded);
});

function updateLocalStorage(newTodo) {
  localStorageUpdatedArray.push(newTodo);
  localStorage.setItem(
    "localStorageArray",
    JSON.stringify(localStorageUpdatedArray)
  );
}

console.log(todoArray.getAllTodo());
console.log(todoArray.getProjectsName());
