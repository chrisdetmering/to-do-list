
document.getElementById('addButton')
.addEventListener('click', displayTodo)


function displayTodo(e) {
    e.preventDefault();

    const myList = document.getElementById("myList");
    const textContent = document.getElementById('textContent');
    const text = textContent.value; 
    const todo = document.createElement("li");
    const removeButton = createRemoveButton(todo); 
    const toggleTodoButton = createToggleTodo(todo); 

    todo.appendChild(removeButton);
    todo.appendChild(toggleTodoButton);
    todo.appendChild(document.createTextNode(textContent.value));
    myList.appendChild(todo);
    textContent.value = '';
}


function createRemoveButton(li) { 
    const remove = document.createElement("button");
    remove.innerText = "Delete";
    remove.style.borderRadius = "10px";
    remove.style.float = "right";
    remove.style.height = "30px";
    remove.style.fontFamily = "Chalkboard, fantasy";
    remove.style.fontSize = "large";
    remove.style.backgroundColor = "red";
    remove.style.color = "white";

    remove.addEventListener("click", () => {
        li.remove();
    })

    return remove; 
}


function createToggleTodo(li) { 
    const done = document.createElement("button");
    done.innerText = "Complete";
    done.style.borderRadius = "10px";
    done.style.height = "30px";
    done.style.float = "right";
    done.style.fontFamily = "Chalkboard, fantasy";
    done.style.fontSize = "large";
    done.style.backgroundColor = "rgb(18, 90, 18)";
    done.style.color = "white";
    
    done.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        li.style.color = "rgb(18, 90, 18)";
    })

    return done; 
}