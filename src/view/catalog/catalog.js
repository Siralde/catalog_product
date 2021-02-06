import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { PRODUCTS } from '../../mockup/mockup';
import CatalogList from './catalogList/catalogList';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Catalog = () => {

  const products = PRODUCTS;

  return (
    <View style={styles.container}>
        <CatalogList products={products}/>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH
  },
});

export default Catalog;