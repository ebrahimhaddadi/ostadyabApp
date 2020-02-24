import React, { Component } from 'react';
import { Text, View,StyleSheet,TextInput,TouchableOpacity,AsyncStorage } from 'react-native';
import Form from '../component/Form'

 class SignInScreen extends Component {
    static navigationOptions = {
        header: null,
        
        };
        constructor(props){
            super(props);
            this.state={
                login:{username:"",password:""}
            }
        }
    render() {
        const { navigation } = this.props;
        console.log(this.state.login)
        return (
            <View
            style={styles.mainview }
            >
            <View
            style={styles.header}
            >
                <Text
                style={styles.textheader}
        >ورود</Text>
            </View>
            
    
                <Form type="ورود"/>
          
        <View
        style={styles.btnbottom}
        >
        <TouchableOpacity
        onPress={()=>navigation.navigate('SignUp')}
        >
          <Text style={styles.loginText}>ثبت نام کنید</Text>
        </TouchableOpacity>
            </View>
            </View>
        )
    }
};
const styles=StyleSheet.create({
    mainview:{
        flex:1,
    
    },
    header:{
        direction:'rtl',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        height:65,
        backgroundColor:'#e6e9ed',
    },
    textheader:{
        fontFamily:'Vazir',
        fontSize:20
    },
    secondview:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: "center",
        
    },
    inputView:{
        width:"80%",
        backgroundColor:"whitesmoke",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        // color:"white",
        fontFamily:'Vazir'
      },
      forgot:{
        fontFamily:'Vazir',
        fontSize:14
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#3897F0",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },  
      loginText:{
          fontFamily:'Vazir',
          fontSize:15
      },
      btnbottom:{
          justifyContent:'center',
          alignItems:'center',
          margin:15,
          padding:5
      }



})

export default SignInScreen;
