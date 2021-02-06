import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const ProductHeader = ({product}) => {
<<<<<<< HEAD

=======
>>>>>>> old-state
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
