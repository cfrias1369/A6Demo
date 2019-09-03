import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  private temperatureInCelsius = new BehaviorSubject<number>(20);
  temperatureInCelsiusObservable = this.temperatureInCelsius.asObservable();

  private temperatureInFahrenheit = new BehaviorSubject<number>(68);
  temperatureInFahrenheitObservable = this.temperatureInFahrenheit.asObservable();

  constructor() {}

  getTemperatureInCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5.0 / 9.0;
  }

  getTemperatureInFahrenheit(tempInCelsius) {
    return tempInCelsius * 9.0 / 5.0 + 32;
  }

  setTemperatureFromFahrenheit(tempInFahrenheit) {
    this.temperatureInCelsius.next(this.getTemperatureInCelsius(tempInFahrenheit));
    this.temperatureInFahrenheit.next(tempInFahrenheit);
  }

  setTemperatureFromCelsius(tempInCelsius) {
    this.temperatureInCelsius.next(tempInCelsius);
    this.temperatureInFahrenheit.next(this.getTemperatureInFahrenheit(tempInCelsius));
  }
}
