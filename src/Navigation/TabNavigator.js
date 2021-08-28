import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import HomeStackScreen from '../Screens/Home/Home';
import ShoppingListPage from '../Screens/ShoppingList/ShoppingList';
import SavedPage from '../Screens/SavedPage/SavedPage';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    bottomTabIcon: {
        width: 20,
        height: 20
    }
})

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        style={styles.bottomTabIcon}
                        source={require('../assets/home.png')
                        } />
                )
            }}></Tab.Screen>
            <Tab.Screen name="Shopping list" component={ShoppingListPage} options={{
                tabBarIcon: ({ color }) => (
                    <Image
                        style={styles.bottomTabIcon}
                        source={require('../assets/shopping.jpeg')
                        } />
                )
            }}></Tab.Screen>
            <Tab.Screen name="Saved" component={SavedPage} options={{
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

