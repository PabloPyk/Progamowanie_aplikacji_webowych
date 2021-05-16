import { App } from './app';
import { Ui } from './ui';
import './main.scss';

const app = new App();
const ui = new Ui();

class Main {

    constructor() {
        this.inputEvents();
    }

    inputEvents() {
        // <input id="city-name" type="text">
        // <button id="add-button" type="submit">Dodaj</button>

        const addCityForm = document.getElementById('add-city-form');
        const addButton = document.getElementById('add-button');
        const cityName = document.getElementById('city-name') as HTMLInputElement;


        addCityForm.addEventListener('submit', (event) => {    
            event.preventDefault();

            const currentVal = cityName.value;

            app.getCityInfo(currentVal).then((data : any) =>{
                ui.populateUi(data);
            })
        })         
    }
}

new Main();