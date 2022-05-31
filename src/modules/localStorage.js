import TodoConstructor from "./TodoConstructor.js";
import { todoArray } from "./todoArray.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

// const localStorageArray = JSON.parse(localStorage.getItem("localStorageArray"));

// const localStorageUpdatedArray = [
//   // {
//   //   title: "prova",
//   //   description: "prova description",
//   //   dueDate: format(new Date(), "eeee"),
//   //   priority: 1,
//   //   project: "provaProject",
//   // },
//   // {
//   //   title: "prova",
//   //   description: "prova description",
//   //   dueDate: format(new Date(), "eeee"),
//   //   priority: 1,
//   //   project: "provaProject",
//   // },
//   // {
//   //   title: "prova",
//   //   description: "prova description",
//   //   dueDate: format(new Date(), "eeee"),
//   //   priority: 1,
//   // },
//   ...localStorageArray,
// ];

// localStorageArray.forEach((todo) => {
//   const todoToBeAdded = new TodoConstructor(todo);
//   todoArray.addTodo(todoToBeAdded);
// });

// export default function updateLocalStorage(newTodo) {
//   localStorageUpdatedArray.push(newTodo);
//   console.log(localStorageArray);
//   console.log(localStorageUpdatedArray);
//   localStorage.setItem(
//     "localStorageArray",
//     JSON.stringify(localStorageUpdatedArray)
//   );
// }
