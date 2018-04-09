export class StateWeather {
  name: string;
  temp: number;
  humidity: number;

  constructor(name: string, temp: number, humidity: number){
    this.name = name;
    this.temp = temp;
    this.humidity = humidity;
  }
  getDifference(requiredTemp, requiredHumidity): string {
    return ( (Math.abs(requiredTemp - this.temp) + Math.abs(requiredHumidity - this.humidity)).toFixed(1));
  }
}
