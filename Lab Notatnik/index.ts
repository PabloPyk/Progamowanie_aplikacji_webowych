let AddNote = <HTMLInputElement>document.querySelector("#AddNote")
let addNewNote = <HTMLInputElement>document.querySelector("#addNewNote")
let submitButton = <HTMLInputElement>document.querySelector("#submitButton")
let tasks = <HTMLInputElement>document.querySelector('#noteContainer')



class Note {
    constructor() {
        let dropdown = document.querySelector("select")
        let date = new Date()
        let fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()

        let data = {
            'title': (document.querySelector("#title") as HTMLInputElement).value,
            'value': (document.querySelector("#value") as HTMLInputElement).value,
            'date': fullDate,
            'color': dropdown.options[dropdown.selectedIndex].value
        }
        localStorage.setItem((Math.floor(Math.random() * 10001)).toString(), JSON.stringify(data))
    }
}


AddNote.addEventListener('click', function () {
    if (addNewNote.style.display == "none") {
        addNewNote.style.display = "block"
    }
    else {
        addNewNote.style.display = "none"
    }
})


submitButton.addEventListener("click", function () {
    let note = new Note()
})


function displayNote(findObject, i) {
    let divForTask = document.createElement("div")
    divForTask.style.backgroundColor = findObject.color
    divForTask.classList.add("task")
    tasks.appendChild(divForTask)
    remove(i, divForTask)
    addPinButton(divForTask)

    let h2ForTitle = document.createElement("h2")
    h2ForTitle.innerText = findObject.title
    divForTask.appendChild(h2ForTitle)

    let h4ForValue = document.createElement("h4")
    h4ForValue.innerText = findObject.value
    divForTask.appendChild(h4ForValue)

    let h5ForDate = document.createElement("h5")
    h5ForDate.innerText = findObject.date
    divForTask.appendChild(h5ForDate)
}


for (let i in localStorage) {
    let findObject = JSON.parse(localStorage.getItem(i))
    displayNote(findObject, i)
}


function addPinButton(divForTask) {
    let button = document.createElement("img")
    button.classList.add("addPin")
    button.src = "./pushpin.svg"
    button.width = 30
    button.height = 30
    divForTask.appendChild(button)

    button.addEventListener("click", function () {
        this.parentNode.parentNode.prepend(this.parentNode)
    })
}


function remove(id, divForTask) {
    let exitButton = document.createElement("img")
    exitButton.classList.add("exitButton")
    exitButton.src = "./x-mark.svg"
    exitButton.width = 30
    exitButton.height = 30
    divForTask.appendChild(exitButton)

    exitButton.addEventListener("click", function () {
        if (confirm('Usunąć notatkę?')) {
            localStorage.removeItem(id)
            location.reload()
        }
    })
}

