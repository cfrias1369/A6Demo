import { Component, OnInit } from '@angular/core';

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
}
