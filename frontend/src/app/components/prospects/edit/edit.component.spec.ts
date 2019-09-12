import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { MatDivider, MatCard, MatSnackBar, MatInputModule, MatFormField } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Overlay } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const testSubjectName = 'EditComponent (Prospects)';
describe(`${testSubjectName}`, () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

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
        EditComponent,
        MatDivider,
        MatCard,
      ],
      providers: [MatSnackBar, Overlay],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const nameItem = compiled.querySelector('form.update-form input.mat-input-element[formcontrolname=\'name\']');
    expect(nameItem).toBeTruthy();
    expect(nameItem.attributes.placeholder.value).toContain('Name');
  });

  it('should have 4 inputs', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputItems = compiled.querySelectorAll('form.update-form input.mat-input-element');
    // console.log('firstNameItem: ', firstNameItem);
    expect(inputItems).toBeTruthy();
    expect(inputItems.length).toEqual(4);
  });
});
