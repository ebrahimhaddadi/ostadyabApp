import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

 class ForgotScreen extends Component {
    static navigationOptions = {
        header: null,
        
        };
        constructor(props){
            super(props);
            this.state={
                login:{username:"",phonenumber:""}
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
                >بازیابی رمز</Text>
            </View>
            <View
            style={styles.secondview}
            >
          <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="نام کاربری" 
            placeholderTextColor="#003f5c"
            onChangeText={(text)=>this.setState(prevState =>({
                login:{
                    ...prevState.login,
                    username:text
                }
            }))}
            />
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="شماره تلفن" 
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text)=>this.setState(prevState=>({
                login:{
                    ...prevState.login,
                    phonenumber:text
                }
            }))}
            
            />
        </View>
        
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>بازیابی رمز</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Signin')}
        >
          <Text style={styles.loginText}>صفحه ورود</Text>
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
      }



})

export default ForgotScreen;
