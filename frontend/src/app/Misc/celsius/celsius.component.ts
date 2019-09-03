import { Component, OnInit, Input } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit {
  @Input() temperatureInCelsius: number;
  temperatureInFahrenheit: number;

  constructor(private temperatureService: TemperatureConversionService) { }

  ngOnInit() {
    this.temperatureService.fahrenheitUpdated.subscribe((temperature) => {
      this.temperatureInCelsius = this.temperatureService.getTemperatureInCelsius(temperature);
    });
  }

  onTemperatureChange(value) {
    this.temperatureInCelsius = value;
    this.temperatureInFahrenheit = this.temperatureService.getTemperatureInFahrenheit(value);
    this.temperatureService.emitCelsiusUpdated(value);
  }
}
