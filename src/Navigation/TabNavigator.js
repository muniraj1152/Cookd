import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../Screens/Home/Home';
import ShoppingListPage from '../Screens/ShoppingList/ShoppingList';
import SavedPage from '../Screens/SavedPage/SavedPage';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}></Tab.Screen>
            <Tab.Screen name="Shopping list" component={ShoppingListPage}></Tab.Screen>
            <Tab.Screen name="Saved" component={SavedPage}></Tab.Screen>
        </Tab.Navigator>
    )
}

 