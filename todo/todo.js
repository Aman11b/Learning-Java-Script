const todoList = [
  {
    name: "make coffee",
    dueDate: "2022-12-22",
  },
  {
    name: "drink coffee",
    dueDate: "2022-12-03",
  },
];

renderTodo();
function renderTodo() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p>${i + 1} : ${name}</p> 
      <p>${dueDate}</p>
      <button 
      onclick='
      todoList.splice(${i},1); 
      renderTodo();
      '
      class='deleteBtn'>
      Delete
      </button> 
    `;
    todoListHtml += html;
  }

  const todoDiv = document.querySelector(".js-todos");
  todoDiv.innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dueDateElement = document.querySelector(".js-dueDate");
  const name = inputElement.value;
  const dueDate = dueDateElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";
  renderTodo();
}
