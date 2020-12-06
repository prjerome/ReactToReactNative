import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import BusinessList from '../BusinessList/BusinessList';
import Searchbar from '../Searchbar/Searchbar';

function App() {
  const [setBusinesses] = useState([]);

  const apiKey =
    'k1mfKLNEZjzoeDTyDfRc8BCDz45ELrIKTIKOf4PGiKr6NCP3ePK1ef4Ic_H4nUXsMiimA5V00gBXyMoWHvM8ZOVZkK9jVdNeyAcdn6WUsWYlBJ4xOQam2k4f-M8CX3Yx';

  const Yelp = {
    search(term, location, sortBy) {
      const queryString = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

      const response = fetch(queryString, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const jsonResponse = response.json();
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
    },
  };

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((Businesses) => {
      setBusinesses(Businesses);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>Local Businesses Search</Text>
      <Searchbar searchYelp={searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'normal',
  },
  h1: {
    padding: 0,
    backgroundColor: 'yellow',
    fontFamily: 'normal',
    color: 'white',
  },
});

export default App;
