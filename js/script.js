const todoInput = document.querySelector(".todo__input");
const addButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");
const todoItems = document.querySelectorAll(".todo__item");
const todoWarning = document.querySelector(".todo__warning");
const footerDropdownLinks = document.querySelectorAll(".footer__dropdown__links");

// ADD TODO
const addTodo = todo => {
  let entry = document.createElement("li");
  entry.classList.add("todo__item");
  entry.innerHTML = `${todo}<div class="todo__operators">
  <span class="check__complete is-completed"><div></div></span>
  <span class="todo__delete">X</span>
  </div>`;
  todoList.insertBefore(entry, todoList.firstChild);
  checkList();
};

// MARK COMPLETE
const markComplete = e => {
  e.target.closest("LI").classList.toggle("is-completed");
};

// DELETE TODO
const deleteTodo = e => {
  e.target.closest("LI").remove();
  checkList();
};

const checkList = () => {
  if (todoList.children.length === 0) {
    todoWarning.style.display = "block";
    todoList.style.display = "none";
  } else {
    todoWarning.style.display = "none";
    todoList.style.display = "block";
  }
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
  if (e.target.classList.contains("todo__delete")) {
    deleteTodo(e);
  } else {
    markComplete(e);
  }
});

// FOOTER DROPDOWNS

const showDropdown = e => {
  e.target.closest(".footer__dropdown__links").classList.toggle("is-active");
};

footerDropdownLinks.forEach(footerDropdownLink => {
  footerDropdownLink.addEventListener("click", e => {
    showDropdown(e);
  });
});
