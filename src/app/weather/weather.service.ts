import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { StateWeather } from './stateWeater';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class WeatherService {
  public config: any;
  public currentWeatherStatesList: Array<StateWeather>;
  public timeStamp: number;
  constructor(private http: Http) { }
  getConfig(): Observable<any> {
    return this.http.get('./assets/config.json')
      .map(res => {
        this.config = res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getStatesWeatherList(): Observable<any> {
    return this.http.get(`${this.config.url}?bbox=${this.config.box_coordinates}&units=${this.config.units}&appid=${this.config.appId}`)
      .map(res => {
        this.timeStamp = Date.now();
        this.currentWeatherStatesList = _.map(res.json().list, city => {
          return new StateWeather(city.name, city.main.temp, city.main.humidity);
        });
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  isExistAndRelevant() {
    return this.timeStamp && Date.now() - this.timeStamp < (this.config.hours_refreshing_data * 60 * 60 * 1000);
  }
}
