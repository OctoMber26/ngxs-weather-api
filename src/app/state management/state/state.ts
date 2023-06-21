import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.data.model';
import { State } from '@ngxs/store';
import { WeatherService } from '../services/weather.service';
import { Selector } from '@ngxs/store';
import { displayWeatherData } from '../actions/actions';
import { StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs';

export interface WeatherStateModel {
  data: WeatherData | null;
  city: string;
  loading: boolean;
}

@State<WeatherStateModel>({
  name: 'weather',
  defaults: {
    data: null,
    city: '',
    loading: false,
  },
})
@Injectable()
export class WeatherState {
  constructor(private weatherService: WeatherService) {}

  @Selector()
  static weather(state: WeatherStateModel) {
    return state.data;
  }

  @Selector()
  static isLoading(state: WeatherStateModel) {
    return state.loading;
  }

  @Action(displayWeatherData)
  getData(ctx: StateContext<WeatherStateModel>, { city }: displayWeatherData) {
    ctx.patchState({ loading: true });
    ctx.patchState({ city });
    return this.weatherService.fetchWeatherData(ctx.getState().city).pipe(
      tap((response) => {
        ctx.patchState({ loading: false, data: response });
      })
    );
  }
}
