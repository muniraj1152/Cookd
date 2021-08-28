import { NavigationContainer } from '@react-navigation/native';
import TabNavigator  from './TabNavigator';
import React from 'react';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator></TabNavigator>
    </NavigationContainer>
  )
}
