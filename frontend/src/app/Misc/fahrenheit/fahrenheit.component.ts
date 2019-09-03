import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {
  @Input() temperatureInFahrenheit: number;
  temperatureInCelsius: number;
  @Output() temperatureUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onTemperatureChange(value) {
    this.temperatureInFahrenheit = value;
    this.temperatureInCelsius = this.getTemperatureInCelsius(value);
    this.temperatureUpdated.emit(value);
  }

  getTemperatureInCelsius(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5.0 / 9.0;
  }
}
