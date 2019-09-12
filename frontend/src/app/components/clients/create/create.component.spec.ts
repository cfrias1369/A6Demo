import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { MatDivider, MatCard, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const testSubjectName = 'CreateComponent (Clients)';
describe(`${testSubjectName}`, () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ObserversModule,
        HttpClientModule,
        MatInputModule,
      ],
      declarations: [
        CreateComponent,
        MatDivider,
        MatCard,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first name input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const firstNameItem = compiled.querySelector('form.create-form input.mat-input-element[formcontrolname=\'firstName\']');
    // console.log('firstNameItem: ', firstNameItem);
    expect(firstNameItem).toBeTruthy();
    expect(firstNameItem.attributes.placeholder.value).toContain('First Name');
  });

  it('should have 7 inputs', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputItems = compiled.querySelectorAll('form.create-form input.mat-input-element');
    // console.log('firstNameItem: ', firstNameItem);
    expect(inputItems).toBeTruthy();
    expect(inputItems.length).toEqual(7);
  });

});
