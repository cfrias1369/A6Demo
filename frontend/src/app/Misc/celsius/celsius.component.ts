import { Component, OnInit } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit {
  temperatureInCelsius: number;

  constructor(private temperatureService: TemperatureConversionService) { }

  ngOnInit() {
    this.temperatureService.temperatureInCelsiusObservable.subscribe((temperature) => {
      this.temperatureInCelsius = temperature;
    });
  }

  onTemperatureChange(value) {
    this.temperatureInCelsius = value;
    this.temperatureService.setTemperatureFromCelsius(value);
  }
}
