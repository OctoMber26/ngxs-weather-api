import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviorment } from 'src/enviorments/enviorment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: any): Observable<WeatherData> {
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
