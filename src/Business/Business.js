import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';



class Business extends React.Component {
    render() {
        return(
       <ScrollView style={styles.business}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageContainerImg} src={this.props.business.imageSrc} alt=''/>
            </View>
            <Text>{this.props.business.name}</Text>
            <View >
                <View>
                <Text>{this.props.business.address}</Text>
                <Text>{this.props.business.city}</Text>
                <Text>{this.props.business.state} {this.props.business.zipCode}</Text>
                </View>
                <View>
                <Text>{this.props.business.category}</Text>
                <Text>{`${this.props.business.rating} stars`}</Text>
                <Text>{`${this.props.business.reviewCount} reviews`}</Text>
                </View>
            </View>
        </ScrollView> 
        )
    }
}

const styles = StyleSheet.create({
    business = {
    margin: 0 auto
    },

/* Reusable Component - Image Container */

imageContainer = {
    flex: 1,
    flexDirection: column,
    justifyContent: center,
    overflow: hidden,
    background: white
  },
  
  imageContainerImg = {
    width: 100%
  }
});

export default Business;