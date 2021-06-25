import firebase from 'firebase';
import { firebaseConfig } from './config'

let addNoteButton = <HTMLInputElement>document.querySelector("#AddNote")
let addNewNote = <HTMLInputElement>document.querySelector("#addNewNote")
let submitButton = document.getElementById("submitButton");
let tasks = <HTMLInputElement>document.querySelector('#noteContainer')

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

async function addNote(note) {
    const res = await db.collection('notes').add(note)
}

async function deleteNote(id) {
    const res = await db.collection('notes').doc(id).delete();
}

async function updateNote(id, note) {
    const res = await db.collection('notes').doc(id).update(note)
}

async function getNote(id) {
    return db.collection("notes").doc(id).get()
}

async function getNotes() {
    return db.collection("notes").get()
}

class Note {
    constructor() {
        let dropdown = document.querySelector("select")
        let date = new Date()
        let fullDate = "Data dodania: " + date.getDate() + "." + date.getMonth() + "." + date.getFullYear()

        let data = {
            title: `${(document.querySelector("#title") as HTMLInputElement).value}`,
            value: `${(document.querySelector("#value") as HTMLInputElement).value}`,
            date: `${fullDate}`,
            color: `${dropdown.options[dropdown.selectedIndex].value}`
        }
        addNote(data).then(() => {
            addNewNote.style.display = "none";
            location.reload();
        })
    }
}

addNoteButton.addEventListener('click', function () {
    const addNewNoteDisplay = addNewNote.style.display;

    if (addNewNoteDisplay == "none" || addNewNoteDisplay == "") {
        addNewNote.style.display = "block"
    } else {
        addNewNote.style.display = "none"
    }
})

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
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

getNotes().then(res => {
    res.forEach(resData => displayNote(resData.data(), resData.id))
})

function addPinButton(divForTask) {
    let button = document.createElement("img")
    button.classList.add("addPin")
    button.src = require("./pushpin.svg")
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
    exitButton.src = require("./x-mark.svg")
    exitButton.width = 30
    exitButton.height = 30
    divForTask.appendChild(exitButton)

    exitButton.addEventListener("click", function () {
        if (confirm('Usunąć notatkę?')) {
            deleteNote(id).then(() => location.reload());
        }
    })
}
