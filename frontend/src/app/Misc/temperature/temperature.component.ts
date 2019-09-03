import { Component, OnInit, ViewChild } from '@angular/core';
import { CelsiusComponent } from '../celsius/celsius.component';
import { FahrenheitComponent } from '../fahrenheit/fahrenheit.component';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  @ViewChild(CelsiusComponent, {static: true}) celsiusComponent;
  @ViewChild(FahrenheitComponent, {static: true}) fahrenheitComponent;

  title = 'Temperature Conversion';
  titleGraphicUrl = '/assets/images/tempconversion.jpg';
  clickCount = 0;
  label = '';

  constructor() { }

  ngOnInit() {
  }

  incrementClickCounter() {
    this.clickCount++;
  }

  modifyLabel(label) {
    // tslint:disable-next-line: quotemark
    this.label = label;
    if (this.label === 'Charlie') {
      alert('Hi, Charlie');
    }
  }

  temperatureUpdated(temperature, unit): void {
    if (unit === 'C') {
      this.fahrenheitComponent.temperatureInFahrenheit = this.celsiusComponent.getTemperatureInFahrenheit(temperature);
    } else if (unit === 'F') {
      this.celsiusComponent.temperatureInCelsius = this.fahrenheitComponent.getTemperatureInCelsius(temperature);
    }
  }
}
