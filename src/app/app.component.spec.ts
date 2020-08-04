import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { useUtilsServiceStub } from './utils/testing/utils.service.stub';
import { Component } from '@angular/core';

// Default angular test configuration
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         AppComponent
      ],
      providers: [
        // inject the stub service, to preserve the unit concept
        // In that file we are going to test only the `AppComponent`, 
        // so the service is irrelevant i just need it to return controlled values, representing an real iteraction
        useUtilsServiceStub 
        
      ]
    })
    .compileComponents(); // compile components in case test runnin 
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-tests-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-tests-sample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // request Angular to resolve the changes: eg resolve ngIf, ngFors e etc...
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unit-tests-sample app is running!');
  });
});
