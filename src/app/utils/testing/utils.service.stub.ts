import { of, Observable } from "rxjs";

import { UtilsService } from './../utils.service';

// Select the Class you want to create a stub
// Create a Class with same name plus the sufix `stub`
// Add the same methods signature
// Do nothing inside the methos and return a value default
export class UtilsServiceStub {
    getStartShips(): Observable<any> { return of([]); } // return an observable with an empty array
}

// Replace the ocurrency of UtilsService by it`s Stub
export const useUtilsServiceStub = {
    provide: UtilsService,
    useClass: UtilsServiceStub
};
