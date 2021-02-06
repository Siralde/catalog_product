import React from 'react';
<<<<<<< HEAD
import {View, StyleSheet, FlatList} from 'react-native';
=======

import {View, StyleSheet, FlatList} from 'react-native';

>>>>>>> old-state
import CatalogListItem from './catalogListItem/catalogListItem';

const CatalogList = ({products}) => {
  
    const renderProducts = ({item, index}) => {
        return <CatalogListItem key={index} item={item} />;
    }

    return (    
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={(item) => item.key}
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
