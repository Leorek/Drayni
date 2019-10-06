import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from '../screens/home/home.screen';
import {ItemScreen} from '../screens/item/item.screen';

export const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Item: {
      screen: ItemScreen,
    },
  },
  {headerMode: 'none'},
);
