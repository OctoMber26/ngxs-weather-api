import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { getWeatherData } from './state management/actions/tutorials.actions';
import { WeatherState } from './state management/state/tutorial.state';
import { WeatherData } from './state management/models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  location?: any;
  data?: WeatherData;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new getWeatherData(this.location));
  }
}
