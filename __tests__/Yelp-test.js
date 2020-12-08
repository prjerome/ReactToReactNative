import {Yelp, apiKey} from '../src/util/Yelp';

it('given there is Yelp.search method, when it is called, it returns a truthy value', () => {
  expect(Yelp.search()).toEqual(true);
});

it('given there is a apiKey variable, it is truthy', () => {
  expect(apiKey).toBeTruthy();
});


