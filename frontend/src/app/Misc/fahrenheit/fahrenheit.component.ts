import { Component, OnInit } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {
  temperatureInFahrenheit: number;

  constructor(private temperatureService: TemperatureConversionService) { }

  ngOnInit() {
    this.temperatureService.temperatureChangedObservable.subscribe((temperature) => {
      this.temperatureInFahrenheit = this.temperatureService.getTemperatureInFahrenheit(temperature);
    });
  }

  onTemperatureChange(value) {
    this.temperatureInFahrenheit = value;
    this.temperatureService.setTemperatureFromFahrenheit(value);
  }
}
