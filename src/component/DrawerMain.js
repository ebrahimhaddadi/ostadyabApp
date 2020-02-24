import * as  React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Drawer from 'react-native-drawer';
import { createAppContainer } from 'react-navigation';
import ControlPanel  from './ControlPanel';
// import ProfileScreen from '../screens/ProfileScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SignUpScreen from '../screens/SignUpScreen';

const MyDrawerNavigator = createDrawerNavigator({
    Home:HomeScreen,

    Details:DetailsScreen,
    
    // Profile:ProfileScreen,
    
    SignUp:SignUpScreen
    
  });
  
  const MyDrawer = createAppContainer(MyDrawerNavigator);


 class DrawerMain extends React.Component {
    render() {
        const {navigation}=this.props
        return (
            <View>
               
            <MyDrawer/>
            </View>
        )
    }
}
  
export default withNavigation(Drawer)
