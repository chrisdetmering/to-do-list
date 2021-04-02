document.getElementById('addButton')
.addEventListener('click', addItem)


function addItem(e) {
    e.preventDefault();
    const input = document.getElementById('textContent');
    const text = input.value;
    if (text === '') {
        return; 
    }
    const myList = document.getElementById("myList");
    
    const todoListItem = document.createElement("li");
    const remove = createRemoveButton(todoListItem);
    const completedButton = createToggleTodo(todoListItem);

    todoListItem.append(text);
    todoListItem.appendChild(remove);
    todoListItem.appendChild(completedButton);


    myList.appendChild(todoListItem);
    input.value = '';
}


function createRemoveButton(todoListItem) { 
    const remove = document.createElement("button");
    remove.innerText = "Delete";
    remove.style.marginLeft = "5px";

    remove.addEventListener("click", () => { 
        todoListItem.remove(); 
    })
    return remove; 
}

function createToggleTodo(todoListItem) {
    const done = document.createElement("button");
    done.innerText = "Complete";

    done.addEventListener("click", () => { 
        todoListItem.classList.toggle("done");
    })

    return done; 
}