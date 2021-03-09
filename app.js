const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// ADD new todo list element
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// Style new todo list element
const generateTemplate = (todo) => {
  const element = `
    <li class="">
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>
    `;
  list.innerHTML += element;
};



// Delete Todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//Filter element list
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filter"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filter"));
};

//Keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});


