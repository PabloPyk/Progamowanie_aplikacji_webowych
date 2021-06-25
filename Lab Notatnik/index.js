var AddNote = document.querySelector("#AddNote");
var addNewNote = document.querySelector("#addNewNote");
var submitButton = document.querySelector("#submitButton");
var tasks = document.querySelector('#noteContainer');
var Note = /** @class */ (function () {
    function Note() {
        var dropdown = document.querySelector("select");
        var date = new Date();
        var fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
        var data = {
            'title': document.querySelector("#title").value,
            'value': document.querySelector("#value").value,
            'date': fullDate,
            'color': dropdown.options[dropdown.selectedIndex].value
        };
        localStorage.setItem((Math.floor(Math.random() * 10001)).toString(), JSON.stringify(data));
    }
    return Note;
}());
AddNote.addEventListener('click', function () {
    if (addNewNote.style.display == "none") {
        addNewNote.style.display = "block";
    }
    else {
        addNewNote.style.display = "none";
    }
});
submitButton.addEventListener("click", function () {
    var note = new Note();
});
function displayNote(findObject, i) {
    var divForTask = document.createElement("div");
    divForTask.style.backgroundColor = findObject.color;
    divForTask.classList.add("task");
    tasks.appendChild(divForTask);
    remove(i, divForTask);
    addPinButton(divForTask);
    var h2ForTitle = document.createElement("h2");
    h2ForTitle.innerText = findObject.title;
    divForTask.appendChild(h2ForTitle);
    var h4ForValue = document.createElement("h4");
    h4ForValue.innerText = findObject.value;
    divForTask.appendChild(h4ForValue);
    var h5ForDate = document.createElement("h5");
    h5ForDate.innerText = findObject.date;
    divForTask.appendChild(h5ForDate);
}
for (var i in localStorage) {
    var findObject = JSON.parse(localStorage.getItem(i));
    displayNote(findObject, i);
}
function addPinButton(divForTask) {
    var button = document.createElement("img");
    button.classList.add("addPin");
    button.src = "./pushpin.svg";
    button.width = 30;
    button.height = 30;
    divForTask.appendChild(button);
    button.addEventListener("click", function () {
        this.parentNode.parentNode.prepend(this.parentNode);
    });
}
function remove(id, divForTask) {
    var exitButton = document.createElement("img");
    exitButton.classList.add("exitButton");
    exitButton.src = "./x-mark.svg";
    exitButton.width = 30;
    exitButton.height = 30;
    divForTask.appendChild(exitButton);
    exitButton.addEventListener("click", function () {
        if (confirm('Usunąć notatkę?')) {
            localStorage.removeItem(id);
            location.reload();
        }
    });
}
