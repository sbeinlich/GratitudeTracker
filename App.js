import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FocusedScreen from './screens/FocusedScreen';
import ListScreen from './screens/ListScreen';
import YouScreen from './screens/YouScreen';


const MainNavigator = createBottomTabNavigator(
    {
        Focused: { screen: FocusedScreen },
        List: { screen: ListScreen },
        You: { screen: YouScreen }
    }, {
        initialRouteName: "Focused"
    }
);

const App = createAppContainer(MainNavigator);

export default App;