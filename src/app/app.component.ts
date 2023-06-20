import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { getWeatherData } from './state management/actions/tutorials.actions';
import { WeatherState } from './state management/state/tutorial.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weather$ = this.store.select(WeatherState.weather);

  location?: any;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new getWeatherData(this.location));
  }
}
