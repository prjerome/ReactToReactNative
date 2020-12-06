const apiKey =
  'k1mfKLNEZjzoeDTyDfRc8BCDz45ELrIKTIKOf4PGiKr6NCP3ePK1ef4Ic_H4nUXsMiimA5V00gBXyMoWHvM8ZOVZkK9jVdNeyAcdn6WUsWYlBJ4xOQam2k4f-M8CX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const queryString = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    return fetch(queryString, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};

export default Yelp;
