import React from 'react';
import {View, StyleSheet} from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';

import ProductInfo from './productInfo/productInfo'

const Product = (props) => {
  const product = props.route.params.product;
  const theme = useTheme();
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <ProductInfo product={product}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
