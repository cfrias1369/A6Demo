import { Injectable } from '@angular/core';
import * as Events from 'events';

@Injectable({
  providedIn: 'root'
})
export class TemperatureConversionService {
  events: Events.EventEmitter;

  constructor() {
    this.events = new Events.EventEmitter();
  }

  getTemperatureInCelsius(tempInFahrenheit) {

    return (tempInFahrenheit - 32) * 5.0 / 9.0;
  }

  getTemperatureInFahrenheit(tempInCelsius) {
    return tempInCelsius * 9.0 / 5.0 + 32;
  }

  emitFahrenheitUpdated(value) {
    this.events.emit('FahrenheitUpdated', value);
  }

  emitCelsiusUpdated(value) {
    this.events.emit('CelsiusUpdated', value);
  }
}
