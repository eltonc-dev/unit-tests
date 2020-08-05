import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SHIPS_LIST_MOCK } from './testing';

describe('UtilsService', () => {
  let service: UtilsService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ] // need to declare testing module, so it will not do the request
    }); // service is singleton, so it dont need to be declared as provider
    service = TestBed.inject(UtilsService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should request starships', () => {
    // const spy = spyOn(http, 'get'); // create an object to represent the method, but do not call the real method 
    const spy = spyOn(http, 'get').and.returnValue(of([]));
    service.getStartShips();

    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('https://swapi.dev/api/starships');
  });

  // async unit test
  // simpler scenário
  it('Should call someThing after result complete', (done) => {
    spyOn(http, 'get').and.returnValue(of([])); // important to mock de return to and observable with some result
    const spy = spyOn(service, 'someThing');
    // subscribe to the function and do your assert inside its result
    service.getStartShips().subscribe(() => { 
      expect(spy).toHaveBeenCalled();
      // Extremelly important!!! DO Never forget to call done function
      // it`s responsable to inform finish of the unit tests
      // it you forgot it, yout tests may return and timeout error
      done(); 
    })
  });

  it('Should map ships', () => {
    // We Can see the use case of mock information
    // It represents/simulates an API return.
    const mapShips = service.mapShips(SHIPS_LIST_MOCK);
    expect(mapShips.length).toEqual(1);
    expect(mapShips[0]).toEqual({
      ...SHIPS_LIST_MOCK[0],
      completeName: `${SHIPS_LIST_MOCK[0].name} - ${SHIPS_LIST_MOCK[0].model}`
    });
  });
});
