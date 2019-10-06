import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {HomeNavigator} from './navigators/main.navigator';

const AppNavigation = createAppContainer(HomeNavigator);

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <AppNavigation />
    </>
  );
};
export default App;
