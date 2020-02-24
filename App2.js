import React from 'react';
import {
    StatusBar, AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {HomeScreen} from './src/screens/HomeScreen';
import DetailsScreen from "./src/screens/DetailsScreen";
import ProfilScreen from "./src/screens/ProfileScreen";
import SignUpScreen from "./src/screens/SignUpScreen";


const App2 = StackNavigator({
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
    Profile: {screen: ProfilScreen},
    SignUp: {screen: SignUpScreen},
});

console.disableYellowBox = true;
StatusBar.setHidden(true);
export default App2; // Export root navigator as the root component