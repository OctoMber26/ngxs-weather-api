import { Location } from '../models/weather.model';

export class getWeatherData {
  static readonly type = '[WEATHER] Get weather data';
  constructor(public payload: Location) {}
}

export class searchCity {
  static readonly type = '[WEATHER] Search city';
  constructor(public payload: Location) {}
}
