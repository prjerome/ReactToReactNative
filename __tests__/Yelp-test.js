import {Yelp, apiKey} from '../src/util/Yelp';

it('given there is Yelp.search method, when it is called, it returns a truthy value', () => {
  expect(Yelp.search('pizza', 'munich', 'best_match')).toBeTruthy();
});

it('given there is a apiKey variable, it is truthy', () => {
  expect(apiKey).toBeTruthy();
});

it('given there is a fetch call, it is truthy', () => {
  //Arrange
  const queryString = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${'pizza'}&location=${'munich'}&sort_by=${'best_match'}`;

  //Act

  const fetchResponse = () => {
    return fetch(queryString, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  };

  //Assert
  expect(fetchResponse).toBeTruthy();
});

/*it('given there is a fetch response, when response.json is called, the return value is not null or undefined', () => {
  //Arrange
  const queryString = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${'pizza'}&location=${'munich'}&sort_by=${'best_match'}`;

  //Act

  const fetchResponse = () => {
    return fetch(queryString, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  };

  //Assert
  expect(
    fetchResponse.then((response) => {
      return response.json();
    })
  ).anything();
});
*/
