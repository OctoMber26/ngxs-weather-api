import { State, Action, StateContext, Select, Selector } from '@ngxs/store';
import { getWeatherData } from '../actions/tutorials.actions';
import { WeatherService } from '../services/weather.service.ts.service';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { tap } from 'rxjs';

export interface WeatherDataModel {
  cityName?: string;
}

@State<WeatherDataModel>({
  name: 'datas',
  defaults: {
    cityName: 'London',
  },
})
@Injectable()
export class WeatherState {
  constructor(private weatherService: WeatherService) {}

  @Action(getWeatherData)
  getData(ctx: StateContext<WeatherDataModel>, {}: getWeatherData) {
    return this.weatherService
      .getWeatherData(ctx.getState().cityName)
      .pipe(tap((response) => console.log(response)));
  }
}
