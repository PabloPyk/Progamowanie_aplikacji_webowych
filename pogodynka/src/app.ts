export class App {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor() {
        this.getCityInfo('zakopane')
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather('zakopane');
        this.saveData(weather, city);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any, city: string) {
        localStorage.setItem('weatherData', JSON.stringify(data));
        const savedCities = localStorage.getItem('cities')
        if (savedCities != null){
            const parseSaveCities = JSON.parse(savedCities);
            const isCity = parseSaveCities.includes(city)
            if(isCity === false){
                parseSaveCities.push(city); 
                localStorage.setItem("cities", parseSaveCities)
            }
        } else {
            localStorage.setItem("cities", JSON.stringify([city]))
        }

            
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}