import {Hellos} from './hello';

describe('My fist test suite', () => {
    it('hello word', () => {
        expect( new Hellos().hello()).toBe('hello');
        
    })
})