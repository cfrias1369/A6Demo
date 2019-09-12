import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatSidenav, MatToolbar, MatNavList, MatIcon, MatSidenavContent, MatSidenavContainer } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const testSubjectName = 'AppComponent';
describe(`${testSubjectName}`, () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        AppComponent,
        MainNavComponent,
        MatSidenav,
        MatToolbar,
        MatNavList,
        MatIcon,
        MatSidenavContent,
        MatSidenavContainer,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Prospects and Clients'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Prospects and Clients');
  });
});
