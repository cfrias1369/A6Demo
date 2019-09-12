import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponent } from './temperature.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CelsiusComponent } from '../celsius/celsius.component';
import { FahrenheitComponent } from '../fahrenheit/fahrenheit.component';
import { MatDivider, MatCard } from '@angular/material';

const testSubjectName = 'TemperatureComponent';
describe(`${testSubjectName}`, () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        TemperatureComponent,
        CelsiusComponent,
        FahrenheitComponent,
        MatDivider,
        MatCard,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
