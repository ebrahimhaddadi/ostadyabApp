import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,Keyboard,TouchableOpacity,AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';


 class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
        }
    }
    componentDidMount(){
        fetch('https://localhost:44377/api/signIn', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
   UserName:this.state.username,
   Password:this.state.password,
  }),
});

    }
    saveData =async()=>{
        const {username,password} = this.state;
      
        //save data with asyncstorage
        let loginDetails={
            username: username,
            password: password
        }
 
        if(this.props.type !== 'ورود')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
             console.log(this.loginDetails)
            Keyboard.dismiss();
            alert("ثبت نام شما با موفقیت انجام شد نام کاربری:" + username + "رمز:" + password);
            this.login();
        }
        else if(this.props.type == 'ورود')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
 
                if (ld.username != null && ld.password != null)
                {
                    if (ld.username == username && ld.password == password)
                    {
                        const { navigation } = this.props;
                        navigation.navigate('Profile')

                    }
                    else
                    {
                        alert('نام کاربری و پسورد یافته نشد!!!');
                    }
                }
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('username: '+ ld.username + ' ' + 'password: ' + ld.password);
    }
   
    render() {
        console.log(this.AsyncStorage);
        console.log(this.state.username);
        // const { navigation } = this.props;
        // this.showData();
        // this.saveData();

        return (
            
                <View
                style={styles.mainTextInput}
                >
                      <Text>{'\n'}</Text>
                
                 <View
                style={styles.viewTextInput}
                >
                    <TextInput
                    placeholder="نام کاربری"
                    style={styles.inputText}
                    placeholderTextColor="#003f5c"
                    onChangeText={(username)=>this.setState({username})}
                    onSubmitEditing={()=> this.password.focus()}
                    />
                </View>
                <View
                style={styles.viewTextInput}
                >
                    <TextInput
                    placeholder="رمز"
                    placeholderTextColor="#003f5c"
                    style={styles.inputText}
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    ref={(input) => this.password = input}
                    />
                   
                </View>
                 <TouchableOpacity
                style={styles.SignUpview} 
                onPress={()=>this.saveData}
                >
                    <Text style={styles.logintext}
                        onPress={()=>this.saveData()}
                    >
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
                </View>
                
            
        )
    }
};

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
    mainTextInput:{
        // flex:1,
        marginTop:90,
        justifyContent:'center',
        alignItems:'center',
        // marginTop:20
    },
    viewTextInput:{
        
        width:"80%",
        height:'auto',
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
        width:'100%',
        fontSize:16,
        fontFamily:'Vazir',
        textAlign:'center',


    },
    viewlogintext:{
        marginTop:5
    },
    navicon:{
        position: 'absolute',
        top:13,
        left:13
      }
});
export default withNavigation(Form);
