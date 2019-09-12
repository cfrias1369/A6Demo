import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusComponent } from './celsius.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDivider, MatCard } from '@angular/material';

const testSubjectName = 'CelsiusComponent';
describe(`${testSubjectName}`, () => {
  let component: CelsiusComponent;
  let fixture: ComponentFixture<CelsiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        CelsiusComponent,
        MatDivider,
        MatCard,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
