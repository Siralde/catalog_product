import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import {StyleSheet, TouchableOpacity, Image, Dimensions, Animated} from 'react-native';
=======
import {StyleSheet, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
>>>>>>> old-state
import {useNavigation} from '@react-navigation/native'; //Navigation Handler for Products Details
import ProductDetails from './productDetails';

const WIDTH = Dimensions.get('window').width / 1.024;
const HEIGHT = Dimensions.get('window').height / 1;

<<<<<<< HEAD
const CatalogListItem = ({item}) => {
=======
const CatalogListItem = ({item, theme}) => {
>>>>>>> old-state
  const nav = useNavigation();

  const [opacity, _] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, {opacity}]}>
      <TouchableOpacity
        onPress={() => nav.navigate('product', {product: item})}
      >
        <Image style={styles.img} source={item.img} />
      </TouchableOpacity>
<<<<<<< HEAD

      <ProductDetails item={item}/>
=======
      <ProductDetails item={item} theme={theme}/>
>>>>>>> old-state
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    borderRadius: 15,
    marginTop: 10,
    backgroundColor: '#DCDDFC'
  },
  img: {
<<<<<<< HEAD
    width: WIDTH / 3,
=======
    width: WIDTH/ 3,
>>>>>>> old-state
    height: HEIGHT / 5,
    alignSelf: 'center',
  }
});

export default CatalogListItem;
