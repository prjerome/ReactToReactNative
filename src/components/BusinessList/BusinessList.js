import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return () => {
      this.props.businesses.map((business) => {
        let businessValues = {
          businessProp: business,
          id: business.id,
        };
        return (
          <View style={styles.businessList}>
            <FlatList
              data={[{key: businessValues}]}
              renderItem={({item}) => (
                <Business
                  business={item.businessProp}
                  // eslint-disable-next-line no-shadow
                  keyExtractor={({item}) => item.id}
                />
              )}
            />
          </View>
        );
      });
    };
  }
}

const styles = StyleSheet.create({
  businessList: {
    flex: 1,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 10,
  },
});

export default BusinessList;
