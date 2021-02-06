import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

import {useTheme} from '@react-navigation/native';

const ProductHeader = ({product}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
        <Image style={styles.img} source={product.img}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center'
  },
  img: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 4,
    alignSelf: 'center',
  }
});

export default ProductHeader;
