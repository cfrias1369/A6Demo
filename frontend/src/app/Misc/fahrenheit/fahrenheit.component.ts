import { Component, OnInit, Input } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {
  @Input() temperatureInFahrenheit: number;

  constructor(private temperatureService: TemperatureConversionService) { }

  ngOnInit() {
    this.temperatureService.temperatureInFahrenheitObservable.subscribe((temperature) => {
      this.temperatureInFahrenheit = temperature;
    });
  }

  onTemperatureChange(value) {
    this.temperatureInFahrenheit = value;
    this.temperatureService.setTemperatureInCelsiusFromFahrenheit(value);
  }
}
