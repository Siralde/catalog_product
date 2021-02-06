import React from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

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
                keyExtractor={(item) => item.id}
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
