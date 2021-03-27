function addItem() {
    var myList = document.getElementById("myList");
    var textContent = document.getElementById('textContent');
    var li = document.createElement("li");

    li.setAttribute('id', textContent.value);
    li.appendChild(document.createTextNode(textContent.value));

    myList.appendChild(li);
}