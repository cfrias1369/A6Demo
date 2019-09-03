import { Component, OnInit, Input } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {
  @Input() temperatureInFahrenheit: number;
  temperatureInCelsius: number;

  constructor(private temperatureService: TemperatureConversionService) { }

  ngOnInit() {
    this.temperatureService.celsiusUpdated.subscribe((temperature) => {
      this.temperatureInFahrenheit = this.temperatureService.getTemperatureInFahrenheit(temperature);
    });
  }

  onTemperatureChange(value) {
    this.temperatureInFahrenheit = value;
    this.temperatureInCelsius = this.temperatureService.getTemperatureInCelsius(value);
    this.temperatureService.emitFahrenheitUpdated(value);
  }
}
