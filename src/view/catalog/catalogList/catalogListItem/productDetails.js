import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductDetails = ({item, WIDTH}) => {
  return (
    <View style={styles.container}>
        <View style={[styles.row]}>
            
            {/* First Column */}
            <View style={[styles.column]}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.rating}>
                    <Text style={styles.rating}>3.5</Text>
                </View>
                <Text style={styles.category}>{item.category}</Text>
            </View>
            {/* Second Column */}
            <View style={[styles.column]}>
                <View style={{justifyContent: 'center', alignContent: 'center'}}>
                    <Text style={[styles.price]}>{item.price + ' €'}</Text>
                </View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    flex: 0.4
  },
  column: {
    marginVertical: 2,
    justifyContent: 'space-around'
  },
  name: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 17,
    fontWeight: '700',
    color: "#4b3ca7"
  },
  category: {
    fontFamily: 'Avenir',
    fontSize: 14,
    opacity: 0.8,
    fontWeight: '500',
    color: "#4b3ca7"
  },
  rating: {
    flexDirection: 'row',
    fontFamily: 'Avenir',
    fontSize: 14,
    color: "#4b3ca7"
  },
  //   SECOND ROW
  price: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    color: "#4b3ca7",
    justifyContent: 'center'
  }
});

export default ProductDetails;
