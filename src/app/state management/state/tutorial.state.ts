import { State, Action, StateContext, Select, Selector } from '@ngxs/store';
import { WeatherService } from '../services/weather.service.ts.service';
import { tap } from 'rxjs';
import { getWeatherData } from '../actions/tutorials.actions';
import { WeatherData } from '../models/weather.model';
import { Injectable } from '@angular/core';

export interface WeatherStateModel {
  weatherData: WeatherData | null;
  cityName: string;
}

@State<WeatherStateModel>({
  name: 'weather',
  defaults: {
    weatherData: null,
    cityName: 'Resita',
  },
})
@Injectable()
export class WeatherState {
  constructor(private weatherService: WeatherService) {}

  @Selector()
  static weather(state: WeatherStateModel) {
    return state.weatherData;
  }

  @Action(getWeatherData)
  getData(ctx: StateContext<WeatherStateModel>, {}: getWeatherData) {
    return this.weatherService.getWeatherData(ctx.getState().cityName).pipe(
      tap((response) => {
        ctx.patchState({
          weatherData: response,
        });
      })
    );
  }
}
