import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

class Business extends React.Component {
  render() {
    return (
      <ScrollView style={styles.business}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageContainerImg}
            source={this.props.business.imageSrc}
          />
        </View>
        <Text>{this.props.business.name}</Text>
        <View>
          <View>
            <Text>{this.props.business.address}</Text>
            <Text>{this.props.business.city}</Text>
            <Text>
              {this.props.business.state} {this.props.business.zipCode}
            </Text>
          </View>
          <View>
            <Text>{this.props.business.category}</Text>
            <Text>{`${this.props.business.rating} stars`}</Text>
            <Text>{`${this.props.business.reviewCount} reviews`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  business: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  /* Reusable Component - Image Container */

  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  imageContainerImg: {
    width: 100,
  },
});

export default Business;
