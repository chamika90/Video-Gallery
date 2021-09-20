import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import {theme} from '../config/theme';

import HomeScreen from '../screens/Home';

//const {colors} = theme;
const HomeStack = createStackNavigator();

// Home stack
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000000', // colors.primaryHeaderBackgroundColor,
      },
      headerTintColor: '#ffffff', //colors.primaryHeaderTintColor,
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{title: 'My Music Gallery'}}
    />
  </HomeStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
