import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.data.model';
import { Observable } from 'rxjs';
import { enviorment } from 'src/app/enviorments/enviorments';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  fetchWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(enviorment.weathepApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          enviorment.XRapidAPIHostLabelName,
          enviorment.XRapidAPIHostLabelValue
        )
        .set(
          enviorment.XRapidAPIKeyHeaderName,
          enviorment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams().set('q', cityName).set('days', 3),
    });
  }
}
