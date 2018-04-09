import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { WeatherService } from './weather.service';
import * as _ from 'lodash';

// pipe for over on key value pair in object
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherScoreList: any;
  public statesLoaded = false;
  signUnits: string;
  requiredTemp: number;
  requiredHumidity: number;
  constructor( private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getConfig().subscribe(() => {
      this.signUnits = this.weatherService.config.sign_units;
      this.weatherService.getStatesWeatherList()
           .subscribe( () => {
            this.getWeatherWinnersList();
        });
    });
  }

  getWeatherWinnersList(forMen = true) {
    // function called after the current StatesWeatherList loaded
    const calcWeatherFunction = () => {
      this.statesLoaded = false;
      this.calcApproximationWeather(forMen);
      this.statesLoaded = true;
    };
    // check if the state weather list is exist and still relevant (the period defined by a config parameter)
    if (this.weatherService.isExistAndRelevant()) {
      calcWeatherFunction();
    } else {
      this.weatherService.getStatesWeatherList().subscribe(calcWeatherFunction);
    }
  }

  // takes the first N parameters in a given object
  firstN(obj, n) {
    return Object.keys(obj) // get the keys out
      .sort() // this will ensure consistent ordering of what you will get back.
      .slice(0, n) // get the first N
      .reduce((memo, current) => { // generate a new object out of them
        memo[current] = obj[current];
        return memo;
      }, {});
  }

  // calculation the winner states list by grouping it by the deviation of the required temp and humidity
  calcApproximationWeather(forMen = true) {
    this.requiredTemp = forMen ? this.weatherService.config.required_temperature : this.weatherService.config.required_temperature + 1;
    this.requiredHumidity = this.weatherService.config.required_humidity;
    // group the list by the difference - minimum difference is the winner
    this.weatherScoreList = _.groupBy(this.weatherService.currentWeatherStatesList, state => {
      return state.getDifference(this.requiredTemp, this.requiredHumidity);
    });
    // takes the first N winners
    this.weatherScoreList = this.firstN(this.weatherScoreList, +this.weatherService.config.approximation_result_count);
  }
}
