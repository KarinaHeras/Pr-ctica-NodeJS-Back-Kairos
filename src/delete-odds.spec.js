import {delete_odds} from './delete-odds';

describe('delete odds', () =>{
    it('case 1 ', () =>{
        const case1 =[1,2,3,4,5,6,7,8,9];
        const expected =[2,4,6,8];
        expect(delete_odds(case1)).toEqual(expected);
    })
})