import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const TabNavigator = createBottomTabNavigator({
    Home:HomeScreen,
    Details:DetailsScreen,
    Profile:ProfileScreen,
  });
  const TabBottom=createAppContainer(TabNavigator);
  TabBottom=()=>{
return(<TabBottom/>)
  }
  export default TabBottom;