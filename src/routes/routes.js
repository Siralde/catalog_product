import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack'; // Create the Navigation Stack

import Catalog from '../view/catalog/catalog';
import Product from '../view/product/product';

const MainStack = createStackNavigator();

const MainRoutes = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="catalog"
        component={Catalog}
        options={{
          title: 'Catalogo',
          headerStyle: {
            backgroundColor: '#5553BD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Avenir'
          },
        }}
      />
      <MainStack.Screen
        name="product"
        component={Product}
        options={{
          title: 'Detalles',
          headerStyle: {
            backgroundColor: '#5553BD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'Avenir'
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
