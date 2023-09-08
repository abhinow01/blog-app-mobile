import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator } from '@react-navigation/compat';
import ContentScreen from './ContentScreen';
import Login from './login';

const RootStack = createSwitchNavigator(
  {
    Content: ContentScreen,
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppWrapper = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppWrapper;
