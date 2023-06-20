import { WeatherData } from '../models/weather.model';

export class getWeatherData {
  static readonly type = '[WEATHER] Get weather data';
  constructor(public payload: WeatherData) {}
}

export class searchCity {
  static readonly type = '[WEATHER] Search city';
  constructor(public payload: WeatherData) {}
}
