import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {HomeScreen} from '../screens/home/home.screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Following: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="tv" size={25} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="heart" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'white',
      style: {
        borderTopColor: '#2A2845',
        backgroundColor: '#2A2845',
      },
    },
  },
);
