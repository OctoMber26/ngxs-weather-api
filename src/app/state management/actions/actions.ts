export class displayWeatherData {
  static readonly type = '[WEATHERDATA], Get weather data';

  constructor(public city: string) {}
}
