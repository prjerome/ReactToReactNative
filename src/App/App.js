import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/Searchbar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses,
      });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>Local Businesses Search</Text>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </ScrollView>
    );
  }
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
