import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

const image = {url: './background_search_desktop.jpg'};

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy,
    );
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <View style={styles.SearchBarSortOptionsLi}>
          <FlatList
            keyExtractor={() => sortByOptionValue.id}
            onPress={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
          </FlatList>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.SearchBar}>
        <ImageBackground source={image} style={styles.SearchBar}>
          <View style={styles.SearchBarSortOptionsUl}>
            <FlatList style={styles.SearchBarSortOptions}>
              {this.renderSortByOptions()}
            </FlatList>
          </View>
          <View style={styles.SearchBarFields}>
            <TextInput
              style={styles.SearchBarFieldsTextInput}
              onChange={this.handleTermChange}
              placeholder="Search Businesses"
            />
            <TextInput
              style={styles.SearchBarFieldsTextInput}
              onChange={this.handleLocationChange}
              placeholder="Where?"
            />
          </View>
          <View className="SearchBar-submit">
            <Button style={styles.SearchBarButton} onPress={this.handleSearch}>
              Let's Go
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchBar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 25,
  },

  SearchBarSortOptionsUl: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 2.22,
    marginLeft: 2,
    marginRight: 2,
    color: '#ffffff',
  },

  SearchBarSortOptionsLi: {
    width: 4.33,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: 0,
    paddingBottom: 3,
    paddingLeft: 1,
    paddingRight: 3,
    lineHeight: 1,
    textAlign: 'center',
    fontWeight: 600,
    marginLeft: 2,
    marginRight: 2,
  },

  SearchBarFields: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 2.88,
    flexDirection: 'column',
    alignItems: 'center',
  },

  SearchBarFieldsTextInput: {
    width: 21,
    padding: 1,
    marginRight: 2,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    fontSize: 0.77,
    fontWeight: 500,
    marginRight: 0,
    marginBottom: 0.86,
  },

  SearchBarButton: {
    textAlign: 'center',
    borderRadius: 4,
    padding: 1,
    backgroundColor: '#cca353',
    color: '#ffffff',
    fontWeight: 600,
  },
});

export default Searchbar;
