import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  private temperatureChanged = new BehaviorSubject<number>(20);
  temperatureChangedObservable = this.temperatureChanged.asObservable();

  constructor() {}

  getTemperatureInCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5.0 / 9.0;
  }

  getTemperatureInFahrenheit(tempInCelsius) {
    return tempInCelsius * 9.0 / 5.0 + 32;
  }

  setTemperatureFromFahrenheit(tempInFahrenheit) {
    this.temperatureChanged.next(this.getTemperatureInCelsius(tempInFahrenheit));
  }

  setTemperatureFromCelsius(tempInCelsius) {
    this.temperatureChanged.next(tempInCelsius);
  }
}
