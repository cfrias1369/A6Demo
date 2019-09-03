import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  celsiusUpdated: EventEmitter<number> = new EventEmitter<number>();
  fahrenheitUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  getTemperatureInCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5.0 / 9.0;
  }

  getTemperatureInFahrenheit(tempInCelsius) {
    return tempInCelsius * 9.0 / 5.0 + 32;
  }

  emitFahrenheitUpdated(value) {
    this.fahrenheitUpdated.emit(value);
  }

  emitCelsiusUpdated(value) {
    this.celsiusUpdated.emit(value);
  }
}
