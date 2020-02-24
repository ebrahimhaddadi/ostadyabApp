import React, { Component } from 'react';
import { Text, View,Animated,Easing} from 'react-native';
import LottieView from 'lottie-react-native';


export default class LoadingScreen extends Component {
    static navigationOptions = {
        header: null,
        
        };
    constructor(props){
        super(props);
        this.state={
            progress: new Animated.Value(0),
        }
    }
    //setTimeOut for navigation
    componentDidMount() {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 7000,
          easing: Easing.linear,
        }).start();

        setTimeout(()=>{this.props.navigation.navigate('MyDrawer')},3000);
        // this._bootstrapAsync();
      }
     
    
      // // Fetch the token from storage then navigate to our appropriate place
      // _bootstrapAsync = async () => {
      //   const loginDetails = await AsyncStorage.getItem('loginDetails');
    
      //   // This will switch to the App screen or Auth screen and this loading
      //   // screen will be unmounted and thrown away.
      //   this.props.navigation.navigate(loginDetails ? 'Profile' : 'Auth');
      // };
    render() {
        return (
            <View
            style={{flex:1,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
            }}
            >
                 <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../assets/anim/footbale.json')}
        autoPlay loop
        style={{flexDirection:'column',width:300,}}
        />
            </View>
        )
    }
}

