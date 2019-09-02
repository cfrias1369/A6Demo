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

  constructor() { }

  ngOnInit() {
  }

  incrementClickCounter() {
    this.clickCount++;
  }
}
