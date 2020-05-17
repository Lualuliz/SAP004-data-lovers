import { filterBy} from '../src/data.js';
import { orderBy} from '../src/data.js';
import {data} from '../src/data.js';


describe('filterBy', () => {
  it('is a function', () => {
    expect(typeof filterBy).toBe('function');
  });
  it('Deveria retornar champions coma letra A', () => {
    expect(data.filterBy()).toBe( 'a a z');
    
    
  });
});



describe('orderBy', () => {
  it('is a function', () => {
    expect(typeof  orderBy).toBe('function');
  });

  it('returns `champion com maior armor', () => {
    expect(data.orderBy.sort()).toMacth(31.384);
  });
});
