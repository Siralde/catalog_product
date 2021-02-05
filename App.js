import React from 'react';

//REACT NAVIGATION
import {NavigationContainer} from '@react-navigation/native';

//ROUTES
import MainRoutes from './src/routes/routes';

const App = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default App;
