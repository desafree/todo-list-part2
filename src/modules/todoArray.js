export const todoArray = (function todoArray() {
  const todos = [];

  return { addTodo, getAllTodo, getProjectTodo, getProjectsName };

  function addTodo(todo) {
    todos.push(todo);
  }

  function getAllTodo() {
    return todos
      .filter((todo) => {
        return !todo.deleted;
      })
      .sort((a, b) => {
        if (a.dueDate > b.dueDate) {
          return 1;
        } else {
          return -1;
        }
      });
  }

  function getProjectTodo(projectName) {
    const projectTodos = todos
      .filter((todo) => {
        return !todo.deleted;
      })
      .filter((todo) => {
        if (todo.project == projectName) {
          return true;
        }
      })
      .sort((a, b) => {
        if (a.dueDate > b.dueDate) {
          return 1;
        } else {
          return -1;
        }
      });

    return projectTodos.filter((todo) => {
      return !todo.deleted;
    });
  }

  function getProjectsName() {
    return todos
      .filter((todo) => {
        return !todo.deleted;
      })
      .reduce((total, curr) => {
        if (!total.includes(curr.project)) {
          total.push(curr.project);
        }
        return total;
      }, []);
  }
})();
