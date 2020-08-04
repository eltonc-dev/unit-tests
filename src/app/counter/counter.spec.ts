
import { Counter } from './counter';

/**
 * Samples  uncomment to se see
 * todo(1) - impact of wrong use of beforeAll
 * todo(2) - test context
 * todo(3) - uncontrolled test
 */

// considered a `test suit`
describe('#counter', () => {

    let counter: Counter;

    // Before all test cases
    // I can set a single configuration to all items inside this describe scope
    // run only once inside this describe scope
    beforeAll(() => {
        console.log('beforeAll');
        // todo(1): uncomment to see 
        // counter = new Counter();
    });

    // Before each test case
    // I can set intantiate, prepare the environment to each test case
    // run once for each `it` case
    beforeEach(() => {
        console.log('beforeEach');
        counter = new Counter();
    });

    


    // By default always start with the word `should`
    // considered a `test case`
    it('should add 1 when', () => {
        counter.add();
        expect(counter.total).toEqual(1);
    });

    // todo(2): uncomment to see 
    // it('should total equal 2', () => {
    //     counter.add();
    //     expect(counter.total).toEqual(2);
    // });


    // it('should add 5 when 5 passed', () => {
    //     counter.add(5);
    //     expect(counter.total).toEqual(5);
    // });

    // todo(3): uncomment to see 
    // it('should add value', () => {
    //     counter.add(Math.random());
    //     expect(counter.total).toEqual(Math.random());
    // });

    // After all test cases
    // I can dispose an object, destroy, unsubcribe or destroy some configuration to this test suit scope
    // run only once inside this describe scope
    afterAll(() => {
        console.log('afterAll');
    });

    // After each test case
    // I can dispose an object, destroy, unsubcribe and etc to each test case
    // run once for each `it` case
    afterEach(() => {
        console.log('afterEach');
    });
});