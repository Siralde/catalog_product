import React from 'react';

import {View, StyleSheet, FlatList, Dimensions, Text} from 'react-native';

import CatalogListItem from './catalogListItem/catalogListItem';

const WIDTH = Dimensions.get('window').width / 1.024;
const HEIGHT = Dimensions.get('window').height / 1;

const CatalogList = ({theme, products}) => {
  
    const renderProducts = ({item, index}) => {
        return <CatalogListItem key={index} item={item} theme={theme} />;
    }

    return (    
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={(item, index) => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CatalogList;
