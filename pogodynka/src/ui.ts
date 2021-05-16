export class Ui {
    constructor(){
        // this.uiContainer = document.getElementById('content');
        // this.city;
    }

    populateUi(weatherData : any){

        const uiContainer = document.getElementById('content');

        const printWeather = async () => {
            
        
            let a = await weatherData;           
            
            uiContainer.innerHTML = `
                <p>${a.name}</p>
                <p>${a.main.temp}</p> 
                <p>${a.main.humidity}</p>
                <p>${a.main.pressure}</p>     
                
            `;
        }
        
        printWeather();


        
    }
}

new Ui();