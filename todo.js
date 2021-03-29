const button = document.getElementById('addButton');
button.addEventListener('click', addItem)

const text = document.getElementById("textContent").addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        addItem();
    }
});

function addItem(e) {
    e.preventDefault();

    var myList = document.getElementById("myList");
    var textContent = document.getElementById('textContent');
    var li = document.createElement("li");

    li.setAttribute('id', textContent.value);
    li.appendChild(document.createTextNode(textContent.value));

    var remove = document.createElement("button");
    remove.innerText = "Delete";
    remove.style.borderRadius = "10px";
    remove.style.float = "right";
    remove.style.height = "30px";
    remove.style.fontFamily = "Chalkboard, fantasy"
    remove.style.fontSize = "large"
    remove.style.backgroundColor = "red"
    remove.style.color = "white"

    li.appendChild(remove);

    function removeItem(e) {
        myList.removeChild(li);
    };

    var done = document.createElement("button");
    done.innerText = "Complete";
    done.style.borderRadius = "10px";
    done.style.height = "30px";
    done.style.float = "right";
    done.style.fontFamily = "Chalkboard, fantasy"
    done.style.fontSize = "large"
    done.style.backgroundColor = "rgb(18, 90, 18)"
    done.style.color = "white"


    li.appendChild(done);

    function completed(e) {
        li.style.textDecoration = "line-through";
        li.style.color = "rgb(18, 90, 18)";
    };

    remove.addEventListener("click", removeItem)
    done.addEventListener("click", completed)

    myList.appendChild(li);
}