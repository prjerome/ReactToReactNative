export const apiKey =
  '';

export const Yelp = {
  search(term, location, sortBy) {
    const queryString = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    return fetch(queryString, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  },
};
