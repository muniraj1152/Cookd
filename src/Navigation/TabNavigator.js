import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import HomeStackScreen from '../Screens/Home/Home';
import ShoppingListPage from '../Screens/ShoppingList/ShoppingList';
import SavedPage from '../Screens/SavedPage/SavedPage';
import constants from '../utils/constants';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20
  }
})

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={constants.HOME}>
      <Tab.Screen name={constants.HOME} component={HomeStackScreen} options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.bottomTabIcon}
            source={require('../assets/home.png')
            } />
        )
      }}></Tab.Screen>
      <Tab.Screen name={constants.SHOPPING_LIST} component={ShoppingListPage} options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.bottomTabIcon}
            source={require('../assets/shopping.jpeg')
            } />
        )
      }}></Tab.Screen>
      <Tab.Screen name={constants.SAVED} component={SavedPage} options={{
        tabBarIcon: ({ color }) => (
          <Image
            style={styles.bottomTabIcon}
            source={require('../assets/saved.png')
            } />
        )
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

TabNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
};

export default TabNavigator;

