import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//paginas
import Home from '../Pages/Home';
import MyLinks from '../Pages/MyLinks';
// icon
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerInactiveTintColor: '#cecece',
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#132762',
                drawerStyle: {
                    paddingVertical: 20,
                    backgroundColor: '#132752',
                },
                drawerLabelStyle: {
                    fontSize: 17,
                },
                drawerType: 'front',
            }}
        >

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtar Link',
                    headerShown: false,
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'cube' : 'cube-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name='MyLinks'
                component={MyLinks}
                options={{
                    title: 'Meus Links',
                    headerShown: false,
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'stats-chart' : 'stats-chart-outline'}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

        </Drawer.Navigator >
    );
}