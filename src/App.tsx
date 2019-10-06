import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {HomeNavigator} from './navigators/main.navigator';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const AppNavigation = createAppContainer(HomeNavigator);

const App = () => {
  let theme = useColorScheme();

  useEffect(() => {
    changeNavigationBarColor('#2a2845');
  }, []);

  return (
    <>
      <AppearanceProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <AppNavigation theme={theme} />
      </AppearanceProvider>
    </>
  );
};
export default App;
