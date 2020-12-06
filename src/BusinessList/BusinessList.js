import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <ScrollView style={styles.businessList}>
        {this.props.businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  businessList: {
    flex: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 10,
  }
})

export default BusinessList;
