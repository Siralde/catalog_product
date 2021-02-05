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
        options={{headerShown: true}}
      />
      <MainStack.Screen
        name="product"
        component={Product}
        options={{headerShown: true}}
      />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
