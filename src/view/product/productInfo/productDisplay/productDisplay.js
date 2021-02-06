import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProductDisplay = ({product}) => {

  return (
    <View style={styles.container}>
        <View style={[styles.card, {marginBottom: 10}]}>
            <View style={styles.row}>
                <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>{product.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.category}>{product.category}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.price}>{product.price} €</Text>
            </View>
        </View>
        <View style={[styles.card, {marginTop: 30}]}>       
            <View style={styles.row}>
                <Text numberOfLines={5} adjustsFontSizeToFit  style={styles.info}>{product.info}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 0.45,
        paddingHorizontal: 32,
        alignSelf: "center",
        marginTop: 35,
        backgroundColor: "#FFF",
        height: 275,
        elevation: 1,
        width: 280,
        borderRadius: 15,
    },
    row:{
        flexDirection: "row",
        paddingTop: 20,
        alignSelf: "center",
    },
    name: {
        fontFamily: 'Avenir-Heavy',
        color: "#4b3ca7",
        fontSize: 35,
    },
    category: {
        fontFamily: "Avenir",
        color: "#4b3ca7",
        fontSize: 20,
    },
    price:{
        fontFamily: "AvenirNext-Bold",
        color: "#4b3ca7",
        fontSize: 20,
    },
    info:{
        fontFamily: "Avenir",
        color: "#4b3ca7",
        fontSize: 40,
        paddingBottom: 5
    }
});

export default ProductDisplay;
