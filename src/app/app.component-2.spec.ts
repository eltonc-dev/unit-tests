import { TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component';
import { useUtilsServiceStub } from './utils/testing/utils.service.stub';

// simpler way to configure a test suit, to deal with unit tests
// with no template integration
describe('AppComponent 2', () => {
    let component: AppComponent;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
            AppComponent,
            useUtilsServiceStub
        ]
      });
      component = TestBed.inject(AppComponent); // inject the component as it was a provider
    });

    it('Should call otherFunction after getStartShips', () => {
        const spy = spyOn(component, 'otherFunction');
        component.loadStartShips(); // it works in a sync way becouse i`m using the UtilsServiceStub, that return an observable with a value
        expect(spy).toHaveBeenCalled();
    });

    it('Should set loaded as TRUE after getStartShips', () => {
        component.loadStartShips();
        expect(component.loaded).toBeTruthy();
    });
});