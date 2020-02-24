// import React from 'react';
// import { Text, View,Button } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createBottomTabNavigator({
//   Home: HomeScreen,
//   Settings: SettingsScreen,
// });

// export default createAppContainer(TabNavigator);
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import HomeScreen from './src/screens/HomeScreen';
// import DetailsScreen from './src/screens/DetailsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import SignUpScreen from './src/screens/SignUpScreen';

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* other code from before here */}
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }



// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
//   Profile:ProfileScreen,
//   Signup:SignUpScreen

// });

// const ProfileStack = createStackNavigator({
//   Profile:ProfileScreen
// });
// const SignUpStack=createStackNavigator({
//   SignUp:SignUpScreen,
// })


//  const MainTabNav = createAppContainer(
//   createBottomTabNavigator(
//     {
//       Home: HomeStack,
//       SignUp:SignUpStack,
//       Profile:ProfileStack,
//     },
//     {
//       /* Other configuration remains unchanged */
//     }
//   )
// );

//  class test extends React.Component  {
//   static navigationOptions={
//     tabB: {
      
//       style: {
//         backgroundColor: 'blue',
//       },
//     }
//   }
//  render(){
//   return(
    
//       <MainTabNav/>
      
    
//   )}
// }
// import React, { Component } from "react";
// import { View } from "react-native";
// import CustomTabNavigator from "../components/CustomTabNavigator";
// import CustomHeader from "../components/CustomHeader"; 
// export default class test extends Component {
//   static router = CustomTabNavigator.router;
//   render() {
//     return (
//       <View style={{ flex: 1 }}>        
//         <CustomHeader navigation={this.props.navigation} />             
//         <CustomTabNavigator navigation={this.props.navigation} />        
//       </View>    
//     );  
//   }
// }
import React from 'react';
import { Animated, Easing,View ,Text,StyleSheet,TextInput,TouchableOpacity,AsyncStorage, Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';


 class Test extends React.Component{
   constructor(props){
     super(props);
     this.state={
      progress: new Animated.Value(0),
     }
   }
  componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
        }).start();
      
        }
  render(){
    return(
<View
style={{flex:1}}
>
<LottieView
         source={require('./assets/anim/ani.json')} autoPlay loop />
</View>
    )
  }
};
export default Test;
//  class Form extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       progress: new Animated.Value(0),
//       isloading:true,
//       email:'',
//       password: ''  
//     };
//   }
//   saveData =async()=>{
//     const {email,password} = this.state;

//     //save data with asyncstorage
//     let loginDetails={
//         email: email,
//         password: password
//     }

//     if(this.props.type !== 'Login')
//     {
//         AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

//         Keyboard.dismiss();
//         alert("You successfully registered. Email: " + email + ' password: ' + password);
//         this.login();
//     }
//     else if(this.props.type == 'Login')
//     {
//         try{
//             let loginDetails = await AsyncStorage.getItem('loginDetails');
//             let ld = JSON.parse(loginDetails);

//             if (ld.email != null && ld.password != null)
//             {
//                 if (ld.email == email && ld.password == password)
//                 {
//                     alert('Go in!');
//                 }
//                 else
//                 {
//                     alert('Email and Password does not exist!');
//                 }
//             }

//         }catch(error)
//         {
//             alert(error);
//         }
//     }
// }

	
// showData = async()=>{
//     let loginDetails = await AsyncStorage.getItem('loginDetails');
//     let ld = JSON.parse(loginDetails);
//     alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
// }

//   componentDidMount() {
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//     }).start();
  
//     }

//   render() {
//     // this.setState({isloading:false})
//     console.log(this.state.email);
//     console.log(this.state.password)
//     return (
//       <View
//       style={{flex:1}}
//       >
//         {/* <Text>hhoh</Text>
//         <LottieView
//          source={require('./assets/anim/ani.json')} autoPlay loop /> */}
//          <View style={styles.container}>
//                 <TextInput style={styles.inputBox}
//                 onChangeText={(email) => this.setState({email})}
//                 underlineColorAndroid='rgba(0,0,0,0)' 
//                 placeholder="Email"
//                 placeholderTextColor = "#002f6c"
//                 selectionColor="#fff"
//                 keyboardType="email-address"
//                 onSubmitEditing={()=> this.password.focus()}/>
                
//                 <TextInput style={styles.inputBox}
//                 onChangeText={(password) => this.setState({password})} 
//                 underlineColorAndroid='rgba(0,0,0,0)' 
//                 placeholder="Password"
//                 secureTextEntry={true}
//                 placeholderTextColor = "#002f6c"
//                 ref={(input) => this.password = input}
//                 />
 
//                 <TouchableOpacity style={styles.button}> 
//                     <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
//                 </TouchableOpacity>
//             </View>
//     </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   inputBox: {
//       width: 300,
//       backgroundColor: '#eeeeee', 
//       borderWidth:0.5,
//       borderRadius: 25,
//       paddingHorizontal: 16,
//       fontSize: 16,
//       color: '#002f6c',
//       marginVertical: 10
//   },
//   button: {
//       width: 300,
//       backgroundColor: '#4f83cc',
//       borderRadius: 25,
//       marginVertical: 10,
//       paddingVertical: 12
//   },
//   buttonText: {
//       fontSize: 16,
//       fontWeight: '500',
//       color: '#ffffff',
//       textAlign: 'center'
//   }}); 
  
//   //end component form 
//   // start compnent login 
//   class Login extends React.Component {
 
//     signup() {
//         Actions.signup()
//     }
 
//     render() {
//         return(
//                 <View style={styles.container}>
//                 <Text>{'\n'}</Text>
//                 <Text>{'\n'}</Text>
//                 <Form type="Login"/>
//                 <View style={styles.signupTextCont}> 
//                     <Text style={styles.signupText}>Dont have an account yet? </Text>
//                     <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
//                 </View>
//             </View>
//         )
//     }
// }
 
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'white',
//     },
//     signupTextCont: {
//       flexGrow: 1,
//       justifyContent: 'center',
//       alignItems: 'flex-end',
//       paddingVertical: 16,
//       flexDirection: 'row',
//     },
//     signupText: {
//       color: '#12799f', 
//       fontSize:16,
//     },
//     signupButton: {
//         color: '#12799f',
//         fontSize:16,
//         fontWeight: '500',
//     }
// });