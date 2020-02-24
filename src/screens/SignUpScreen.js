import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,TouchableOpacity,AsyncStorage,Keyboard} from 'react-native';
import Form from '../component/Form';


 class SignUpScreen extends Component {
    static navigationOptions = {
        header: null,
        };
        constructor(props){
            super(props);
            this.state={
                
                users:{username:"",password:'',confirmpass:""},
            }
        }
        componentDidMount(){
            this._myfunciton();
        }
        _myfunciton= async () => { 
                const loginDetails = await AsyncStorage.getItem('loginDetails'); 
                // this.props.navigation.navigate(loginDetails ? 'Profile' : 'SignUp');
      
        }
        
    render() {
        const { navigation } = this.props;
        // console.log(this.state)
        return (
            <View
            style={styles.mainViewSignup }
            >
            
                <View
                style={styles.secondView}
                >
                    
                <Text
                style={styles.textHeaderSignup}
                >ثبت نام </Text>
                </View>
                <Form type="ثبت نام"/>
                <View style={styles.btnbottom}>
                
                <TouchableOpacity style={styles.viewlogintext}
                onPress={()=>navigation.navigate('Signin')}
                >
                    <Text style={styles.logintext}>
                        ورود
                    </Text>
                </TouchableOpacity>
                </View>
              
              
            </View>
        )
    }
}
const styles=StyleSheet.create({
    mainViewSignup:{
        flex:1,
        // alignItems:'center',
        
        
    },
    secondView:{
        backgroundColor:'#e6e9ed',
        borderBottomWidth:0.56,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:65,
    },
    textHeaderSignup:{
        fontFamily: "Vazir",
        // paddingBottom:20,
        fontSize: 20
    },
    SignUpview:{
        width:'80%',
        height:50,
        // marginTop:20,
        backgroundColor:"#3897F0",
        borderRadius:25,
        borderWidth:0.5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    logintext:{
        fontSize:16,
        fontFamily:'Vazir'
    },
    viewlogintext:{
        marginTop:5
    },
    navicon:{
        position: 'absolute',
        top:13,
        left:13
      },
      btnbottom:{
          justifyContent:'center',
          alignItems:'center'
      }
});
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},}
export default SignUpScreen;
