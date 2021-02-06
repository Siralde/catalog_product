import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import ProductHeader from './productHeader/productHeader';
import ProductDisplay from './productDisplay/productDisplay';

const ProductInfo = ({product}) => {
  return (
    <ImageBackground
      source={require('../../../assets/background/productDetail.png')}
      style={styles.background}
    >
      <View style={styles.container}>
          <ProductHeader style={styles.display} product={product}/>
          <ProductDisplay product={product}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%'
  },
});

export default ProductInfo;
