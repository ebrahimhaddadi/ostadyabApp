import React, { Component,BackHandler } from 'react';
import * as RNLocalize from 'react-native-localize';
// import I18n from './src/component/I18n';
import i18n from "i18n-js";
import en from './src/translations/en';
import ar from './src/translations/ar';
import memoize from "lodash.memoize";
import { Text, View,Animated,Easing, ActivityIndicator,Button,StyleSheet,BackAndroid,I18nManager,SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RequstScreen from './src/screens/RequstScreen';
import SignInScreen from './src/screens/SignInScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import Backhandler from './src/component/Backhandler'
import CustomComponent from './src/component/CustomComponent';
import AboutScreen from './src/screens/AboutScreen';
import RecentlyScreen from './src/screens/RecentlyScreen';

const AuthStack=createStackNavigator({
  Profile:ProfileScreen,
  Signin:SignInScreen,
  SignUp:SignUpScreen,
  EditProfile:EditProfileScreen,
  
  
})
const AppStack=createStackNavigator({
 Home:HomeScreen,
 Details:DetailsScreen,
 Requst:RequstScreen,
 Recently:RecentlyScreen,
 
})

const entry = createStackNavigator({
  Home: {
    screen: AppStack,
     navigationOptions :{
      header:null,
    }
  },
  Profile: {
    screen: AuthStack,
    navigationOptions :{
      header:null,
    }
  },
  About:{
    screen:AboutScreen,
    navigationOptions:{
      header:null,
    },
    Recently:{
      screen:RecentlyScreen,
      navigationOptions:{
        header:null,
      }
    },
  }

});
const MyDrawerNavigator = createDrawerNavigator(
  {
    entry,
  },
  {
    contentComponent: props => <CustomComponent {...props} />,
    drawerType:"slide",
    drawerPosition:"right",
    drawerWidth:225,
  }
 );
const SwitchStack=createSwitchNavigator({
  AuthLoading: LoadingScreen,
  // Auth: AuthStack,
  // App:AppStack,
  MyDrawer:MyDrawerNavigator
},
{
  initialRouteName:'AuthLoading'
})
const Switching=createAppContainer(SwitchStack);

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ar: () => require("./src/translations/ar.json"),
  en: () => require("./src/translations/en.json"),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: true };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
 class App extends React.Component{  
  static navigationOptions = {
    header:null,
  };
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
    I18nManager.forceRTL(true);
  }
  

  componentDidMount() {
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
   
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };
  render(){
   
    
    return( <View
    style={{flex:1,
      writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' ,
    }}
    >
      <Switching/>
        {/* <Text style={styles.value}>{translate("hello")}</Text> */}
      
    </View>);

}
 }
 
export default  App;
const styles = StyleSheet.create({
 
});
