const toDo = new Map();

const toDoTitleInput = document.getElementById("todo-title-input");
const toDoContentInput = document.getElementById("todo-content-input");
const toDoWrapper = document.getElementById("todo-wrapper");
const toDoContainer = document.getElementById("todo-container");

class toDoContent {

    constructor(title, content) {
        this.title = title;
        this.content = new Set();
    }

    addContent(content) {
        this.content.add(content);
    }
}

function createNewTodo(title, content) {

    const toDoCheckList = document.createElement("div");
    const checkboxContent = document.createElement("div");
    const trace = document.createElement("div");
    const h3 = document.createElement("h3");
    const input = document.createElement("input");
    const label = document.createElement("label");

    toDoCheckList.setAttribute("class", "todo-user")
    checkboxContent.setAttribute("class", "checkbox-content");
    h3.setAttribute("class", "todo-title-user");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "toggle");
    input.setAttribute("id", content + "t")
    label.setAttribute("for", content + "t");
    trace.setAttribute("class", "trace");

    checkboxContent.appendChild(input);
    checkboxContent.appendChild(label);
    toDoCheckList.appendChild(h3);
    toDoCheckList.appendChild(checkboxContent);

    h3.innerHTML = title;
    label.innerHTML = content;
    
    if (toDo.has(title) == false) {

        var newToDo = new toDoContent(title, content);
        newToDo.addContent(content);

        toDo.set(title, newToDo);

        toDoCheckList.setAttribute("id", title);
        toDoWrapper.appendChild(toDoCheckList);
        toDoWrapper.appendChild(trace);
        return
    }

    var toDoOBJ = toDo.get(title);

    if (toDoOBJ.content.has(content)){
        alert("This task already exists in this list");
        return
    }

    toDoOBJ.addContent(content);
    document.getElementById(title).appendChild(checkboxContent);
}

function addNewToDo() {

    if (toDoTitleInput.value == "") {
        alert("Please write a title for the list");
        return
    }
    if (toDoContentInput.value == "") {
        alert("Please write a task for the list");
        return
    }

    createNewTodo(toDoTitleInput.value, toDoContentInput.value);
    document.getElementById("todo-example").style.display = "none";
}
