const todos = [
  {
    id: 1,
    title: "item 1",
    status: false,
  },
  {
    id: 2,
    title: "item 2",
    status: false,
  },
  {
    id: 3,
    title: "item 3",
    status: false,
  },
];

/**
 * set localstorage with the todo data.
 * initially runs to populate the todo list for demo purposes
 * @param {*} obj 
 * @returns 
 */
const setStorage = (obj) => localStorage.setItem("todos", JSON.stringify(todos))

let todoCount = todos.length;
let renderTo = document.getElementById("list");


/**
 * get item from todo list obj from localstorage
 */
function getItem() {
    let localTodo = JSON.parse(localStorage.getItem("todos"))
  localTodo.length <= 0
    ? (renderTo.innerHTML = "TODO listeniz boş!")
    : localTodo.map((todoItem) => {
        let todo = document.createElement("li");
        todo.innerHTML = `${todoItem.title}`;
        todo.setAttribute("id", todoItem.id);
        let cross = document.createElement("span");
        cross.setAttribute("id", todoItem.id);

        cross.innerHTML = "<i class='far fa-trash-alt'></i>";
        cross.classList.add("close");
        cross.addEventListener("click", deleteTodo);
        todo.appendChild(cross);

        renderTo.appendChild(todo);
      });
}


function addItem() {
    let newItem = document.getElementById("task").value;
    let successToast = document.getElementById("liveToastSuccess")
    let failToast = document.getElementById("liveToastFail")
  if (newItem) {
      todos.push({
          id: todoCount + 1,
          title: newItem,
          status: false,
        });

    localStorage.setItem("todos", JSON.stringify(todos))
        document.getElementById("task").value = ""
        document.getElementById("list").innerHTML = "";
        todoCount++;
        getItem();
        var toast1 = new bootstrap.Toast(successToast)
        toast1.show()
    }else{
        var toast2 = new bootstrap.Toast(failToast)
        toast2.show()
    }
}

renderTo.addEventListener("click", toggleTodo);
function toggleTodo(e) {
  let clickedItem = e.target.id;
  todos.map((i) => {
    if (i.id == clickedItem) {
      i.status = !i.status;
      e.target.classList.toggle("checked");
    }
    setStorage(todos)
  });
}

function deleteTodo(e) {
  let delItemId = e.target.parentElement.id;
  todos.forEach((val, ind) => {
    if (val.id == delItemId) {
      todos.splice(ind, 1);
    }
    setStorage(todos)
  });
  document.getElementById("list").innerHTML = "";
  getItem();
}


setStorage()
getItem();
