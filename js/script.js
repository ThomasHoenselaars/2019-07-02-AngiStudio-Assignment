// TODO

const todoInput = document.querySelector(".todo_input");
const addButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const todoItems = document.querySelectorAll(".todo_item");

console.log(todoList);

// ADD TODO
const addTodo = todo => {
  entry = document.createElement("li");
  entry.classList.add("todo_item");
  entry.innerHTML = `${todo}<span class="check_complete"><div></div></span>`;
  todoList.insertBefore(entry, todoList.firstChild);
};

// MARK COMPLETE
const markComplete = e => {
  e.target.closest("LI").classList.toggle("is-completed");

  const checkComplete = e.target.closest("LI").querySelector(".check_complete");

  checkComplete.classList.toggle("is-completed");
  checkComplete.firstChild.classList.toggle("done");
};

// Event Listeners
addButton.addEventListener("click", e => {
  e.preventDefault();
  todo = todoInput.value;
  if (todo.length < 1) {
    return;
  } else {
    addTodo(todo);
  }
  todoInput.value = "";
});

todoList.addEventListener("click", e => {
  markComplete(e);
});

// FOOTER DROPDOWNS

const dropdownLinks = document.querySelectorAll(".dropdown");
const dropdownMenu = document.querySelector(".footer_dropdown_menu");

const showDropdown = e => {
  closestDropdown = e.target.lastElementChild;
  closestDropdown.classList.toggle("is-active");
  e.target.classList.toggle("is-active");
};

dropdownLinks.forEach(dropdownLink => {
  dropdownLink.addEventListener("click", e => {
    showDropdown(e);
  });
});
