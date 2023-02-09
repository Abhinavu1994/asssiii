import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Graph from './src/screens/Graph';
import Notification from './src/screens/Notification';
import Profile from './src/screens/Profile';
import Main from '../Assignment/src/screens/Main';
import Feed from '../Assignment/src/screens/Feed';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Main"
      barStyle={{
        backgroundColor: 'white',
        height: 40,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Main"
        component={Main}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Graph',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="graph" color={color} size={size} />
          ),
        }}
        name="Graph"
        component={Graph}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="notification-clear-all"
              color={color}
              size={size}
            />
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={color}
              size={size}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Feed" component={Feed} />

        <Stack.Screen name="Graph" component={Graph} />

        <Stack.Screen name="Notification" component={Notification} />

        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
