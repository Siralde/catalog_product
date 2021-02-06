import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

import {useNavigation} from '@react-navigation/native'; //Navigation Handler for Products Details
import ProductDetails from './productDetails';


const WIDTH = Dimensions.get('window').width / 1.024;
const HEIGHT = Dimensions.get('window').height / 1;

const CatalogListItem = ({item, theme}) => {
  //NAV VARIABLES
  const nav = useNavigation();

  //INLINE STYLES
  const containerInline = {
    backgroundColor: '#DCDDFC',
  };

  //ANIMTATED STATES
  const [opacity, _] = useState(new Animated.Value(0));

  //ANIMATED METHOD
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, containerInline, {opacity}]}>
      <TouchableOpacity
        onPress={() => nav.navigate('product', {product: item})}
      >
        <Image style={styles.img} source={item.img} />
      </TouchableOpacity>


      <ProductDetails item={item} theme={theme}/>
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
  },
  img: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 5,
    alignSelf: 'center',
  }
});

export default CatalogListItem;
