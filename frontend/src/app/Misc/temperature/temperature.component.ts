import { Component, OnInit } from '@angular/core';
import { TemperatureConversionService } from '../temperature-conversion.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  title = 'Temperature Conversion';
  titleGraphicUrl = '/assets/images/tempconversion.jpg';
  clickCount = 0;
  label = '';

  constructor(private temperatureService: TemperatureConversionService) { }

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
      this.temperatureService.emitCelsiusUpdated(temperature);
    } else if (unit === 'F') {
      this.temperatureService.emitFahrenheitUpdated(temperature);
    }
  }
}
