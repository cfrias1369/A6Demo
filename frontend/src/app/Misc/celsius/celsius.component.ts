import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit {
  @Input() temperatureInCelsius: number;
  temperatureInFahrenheit: number;
  @Output() temperatureUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onTemperatureChange(value) {
    this.temperatureInCelsius = value;
    this.temperatureInFahrenheit = this.getTemperatureInFahrenheit(value);
    this.temperatureUpdated.emit(value);
  }

  getTemperatureInFahrenheit(tempInCelsius) {
    return tempInCelsius * 9.0 / 5.0 + 32;
  }
}
