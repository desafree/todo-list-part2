export const todoArray = (function todoArray() {
  const todos = [];

  return { addTodo, getAllTodo, getProjectTodo, getProjectsName };

  function addTodo(todo) {
    todos.push(todo);
  }

  function getAllTodo() {
    return todos.filter((todo) => {
      return !todo.deleted;
    });
  }

  function getProjectTodo(projectName) {
    const projectTodos = todos.filter((todo) => {
      if (todo.project == projectName) {
        return true;
      }
    });

    return projectTodos.filter((todo) => {
      return !todo.deleted;
    });
  }

  function getProjectsName() {
    return todos.reduce((total, curr) => {
      if (!total.includes(curr.project)) {
        total.push(curr.project);
      }
      return total;
    }, []);
  }
})();
