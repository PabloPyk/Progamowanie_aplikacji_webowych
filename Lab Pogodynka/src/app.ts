export class App {
    opwApiKey = 'd4f238eb17f043fca2a79be91d062376';
    boxNumber: number = 0;

    constructor() {
        this.onClickButton();
        this.fetchFromStorage("T");
    }

    onClickButton(){
        const addByBtn = <HTMLInputElement>document.getElementById('cityButton');
        addByBtn.addEventListener('click', (ev:Event) => this.getCityName());

        const addByEnter = document.body;
        addByEnter.addEventListener('keydown', (ev:KeyboardEvent) => {
            if(ev.key === 'Enter'){
                this.getCityName();
            }
        });
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }

    getCityName(){
        const cityInput = <HTMLInputElement>document.getElementById('cityName');
        const city = cityInput.value;
        this.getCityWeather(city);
    }


    async getCityWeather(city: string) {
        const weather = await this.getWeather(city);

       
        const name = weather.name;
        const img =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const temp = Math.round(weather.main.temp - 273.15).toString();
        const sky = weather.weather[0].main;
        const pressure = weather.main.pressure;
        


        const weatherBox = document.createElement('div');
        weatherBox.className = 'weatherBoxClass';
        weatherBox.setAttribute("id","weatherBoxId" + this.boxNumber);
        const weatherCityName = document.createElement('h1');
        const weatherCityImg = document.createElement('img');
        const weatherCityTemp = document.createElement('p');
        const weatherCitySky = document.createElement('p');
        const weatherCityPressure = document.createElement('p');
       

    
        weatherBox.classList.add('weatherBox');


        weatherCityName.innerHTML = name;
        weatherCityImg.src = img;
        weatherCityTemp.innerHTML = "Temperature: " + temp +"&deg;C";
        weatherCitySky.innerHTML = "Sky: " + sky;
        weatherCityPressure.innerHTML = "Pressure: " + pressure + " hPA";
        

        
        const space = document.getElementById('weathers');
        space.appendChild(weatherBox);
        weatherBox.appendChild(weatherCityName);
        weatherBox.appendChild(weatherCityImg);
        weatherBox.appendChild(weatherCityTemp);
        weatherBox.appendChild(weatherCitySky);
        weatherBox.appendChild(weatherCityPressure);
        

  
    }

    fetchFromStorage(yesOrNo:string){
        this.deleteWindows();
        const tab = localStorage.length;

        for (let i = 1; i < tab; i++) {
            let nazwa;
            nazwa = localStorage.getItem("weatherData" +i);
            const nazwa2= JSON.parse(nazwa);
            if(yesOrNo ==="T"){
            this.getCityWeatherFromStorage(nazwa2,"T");
            }
            else{
                this.getCityWeatherFromStorage(nazwa2,"N");
            }
        }
    }

    
    async getCityWeatherFromStorage(nazwa:any,yesOrNo:string) {

        const weather = await this.getWeather(nazwa.name);

        
        const name = weather.name;
        const img =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const temp = Math.round(weather.main.temp - 273.15).toString();
        const sky = weather.weather[0].main;
        const pressure = weather.main.pressure;
 

        const weatherBox = document.createElement('div');
        weatherBox.className = 'weatherBoxClass'
        weatherBox.setAttribute("id","weatherBoxId" + this.boxNumber);
        const weatherCityName = document.createElement('h1');
        const weatherCityImg = document.createElement('img');
        const weatherCityTemp = document.createElement('p');
        const weatherCitySky = document.createElement('p');
        const weatherCityPressure = document.createElement('p');
        const weatherCityHumidity = document.createElement('p');

        
        weatherBox.classList.add('weatherBox');

      
        weatherCityName.innerHTML = name;
        weatherCityImg.src = img;
        weatherCityTemp.innerHTML = "Temperature: " + temp +"&deg;C";
        weatherCitySky.innerHTML = "Sky: " + sky;
        weatherCityPressure.innerHTML = "Pressure: " + pressure + " hPA";


    
        const space = document.getElementById('weathers');
        space.appendChild(weatherBox);
        weatherBox.appendChild(weatherCityName);
        weatherBox.appendChild(weatherCityImg);
        weatherBox.appendChild(weatherCityTemp);
        weatherBox.appendChild(weatherCitySky);
        weatherBox.appendChild(weatherCityPressure);
        weatherBox.appendChild(weatherCityHumidity);

       
    }

   
    saveData(data: any) {
        this.boxNumber++;
        localStorage.setItem('weatherData' + this.boxNumber, JSON.stringify(data));
    }


    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }

  
    deleteWindows(){
        const div= document.getElementById('weathers');
        div.textContent = "";
    }
}