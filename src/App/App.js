import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/Searchbar';
import Yelp from '../../util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }

  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.h1}>Local Businesses Search</Text>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses}/>
  </View>
    );
  }
};


const styles = StyleSheet.create(
/* Universal Styles */
container = {
  fontSize: 18px,
  fontFamily: 'Work Sans', sans-serif,
  @media only screen and (max-width: 560px) {
    font-size: 15px
  },
  input:focus {
    outline: none
  }
}

/* Reusable Component - Image Container */

image-container = {
  flex: 1,
  flexDirection: column,
  justifyContent: center,
  overflow: hidden,
  background: #000
}

image-container-img = {
  width: 100%;
}

/* Text */

h1 = {
  padding: .66rem 0,
  textAlign: center,
  backgroundColor: #cca353,
  fontFamily: Poppins, sans-serif,
  fontSize: 1.8remm
  color: #fff
}
);

export default App;