import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { WeatherState } from 'src/app/state management/state/state';
import { displayWeatherData } from 'src/app/state management/actions/actions';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css'],
})
export class WeatherComponentComponent {
  weather$ = this.store.select(WeatherState.weather);
  isLoading$ = this.store.select(WeatherState.isLoading);
  city?: string;
  cityForm: FormGroup;

  constructor(private store: Store, private myform: FormBuilder) {
    this.cityForm = this.myform.group({
      city: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    this.onSetCity();
  }

  onSetCity() {
    if (this.city) {
      this.store.dispatch(new displayWeatherData(this.city));
      this.city = '';
    }
  }
}
