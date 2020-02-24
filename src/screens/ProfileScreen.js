import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Picker, TouchableOpacity, AsyncStorage, TextInput,ActivityIndicator,Button } from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from '../component/ControlPanel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";



class ProfileScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    // static navigationOptions = {
    //     drawerLabel: 'Profile',
    //   };
    constructor(props) {
        super(props)
        this.state = {
            users: {},
            loginDetails:[],
            isLoading:true,
            isModalVisible: false
        }
     

    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

    componentDidMount(){
        this._myfunciton();
    }
    _myfunciton= async () => { 
            const loginDetails = await AsyncStorage.getItem('loginDetails');   
            this.setState({loginDetails:loginDetails,isLoading:false})
    }
    callback(users) {
        this.setState({ users })
    }
    
      exite=async()=>{
          await AsyncStorage.clear();
          this.props.navigation.navigate('Auth');
          this.setState({loginDetails:null,isModalVisible:false})
      }
    
    


    render() {
        console.log(this.state.users)
        const { navigation } = this.props;
        const { loginDetails } = this.state;
       
        console.log(loginDetails)
        if(this.state.loginDetails==null){
            navigation.navigate("SignUp")
        }
        if (this.state.isLoading) {
            return (
              <ActivityIndicator />
            )
          }
        

        return (
            <View style={styles.mainView} >
                    <View style={styles.ViewHeder}>
                        
                        <View
                            style={styles.viewtexthead}
                        >
                            <Text style={styles.textProfileHeader}>پروفایل</Text>
                        </View>
                    </View>
                    <View
                    style={styles.container}
                    >

                     <View
                     style={styles.condtion}
                     >
                    <View
                        style={styles.containeredit}
                    >
                        <Image style={styles.imgProfile}
                            source={this.state.users.pickedImage} />
                        <TouchableOpacity
                            style={styles.editprofile}
                            onPress={() => navigation.navigate('EditProfile', { callback: this.callback.bind(this), users: this.state.users })}
                        >
                            <Text
                                style={styles.textedit}
                            >ویرایش پروفایل</Text>
                            <Icon name="edit"
                                style={styles.iconedite}
                            />
                        </TouchableOpacity>
                       
                    </View>




                    <View style={styles.viewpersonal}>
                        <TextInput
                            placeholder="نام کاربری"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}
                        >{this.state.users.username}</TextInput>
                        <TextInput
                            placeholder="نام"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}>{this.state.users.name}</TextInput>
                    </View>
                    <View style={styles.viewpersonal}>
                        <TextInput
                            placeholder="نام خانوادگی"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}>{this.state.users.family}</TextInput>
                    </View>
                    <View style={styles.viewpersonal}>
                        <TextInput
                            placeholder="رشته"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}>{this.state.users.field}</TextInput>
                    </View>
                    <View style={styles.viewpersonal}>
                        <TextInput
                            placeholder="سن"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}>{this.state.users.age}</TextInput>
                    </View>
                    <View style={styles.viewpersonal}>
                        <TextInput
                            placeholder="سوابق و افتخارات"
                            editable={false} selectTextOnFocus={false}
                            style={styles.textPrson}>{this.state.users.details}</TextInput>
                    </View>
                    </View>
                    <View
                    style={styles.ViewiconSignout}
                    >
                      < TouchableOpacity 
                      style={styles.signoutIcon}
                                onPress={() =>this.setState({
                                    isModalVisible:true
                                }) }
                            >
                                <Text
                                    style={styles.textsignIn}
                                >خروج از حساب کاربری</Text>
                            </TouchableOpacity> 
                            </View>
                            <View style={{ flex: 1 }}>
        
        <Modal isVisible={this.state.isModalVisible}
        style={styles.mainmodalview}
        >
          <View style={styles.modalview}>
            <Text
            style={styles.modaltext}
            >
                آیا میخواهید حساب کاربری خود را حذف کنید؟؟؟
            </Text>
            <View
            style={styles.modalbtnmain}
            >
            <TouchableOpacity
            style={styles.modalbtnok}
            onPress={this.exite}
            >
                <Text  style={styles.modalbtntext}>بله </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.modalbtnno}
            onPress={()=>this.setState({
                isModalVisible:false
            })}
            >
                <Text style={styles.modalbtntext}>خیر</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
</View>
                
            </View>

        )
    }
};
const styles = StyleSheet.create({
    mainmodalview:{
        flex:1,
        justifyContent:"center",
    },
    modalview:{
        
        height:250,
        backgroundColor:"#e6e9ed",
        borderWidth:0.5,
        borderRadius:20
    },
    modaltext:{
        textAlign:"center",
        marginTop:40,
        fontFamily:'Vazir'
    },
    modalbtnmain:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:55
    },
    modalbtnok:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#ff3300",
    },
    modalbtntext:{
        fontFamily:"Vazir"
    },
    modalbtnno:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:10,
        backgroundColor:"#66ccff",
    },
    mainView: {
        flex: 1,
        direction: 'rtl'
    },
    ViewHeder: {
        flexDirection: 'row',
        // width: '100%',
        height: 63,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#e6e9ed",
        
    },
    viewtexthead: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex:1,
        height:'auto',
        marginTop:"20%"
    },

    textProfileHeader: {
        fontFamily: 'Vazir',
        fontSize: 18,


    },
    imgProfile: {
        width: 100,
        height: 100,
        borderWidth: 0.8,
        borderRadius: 90,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: 'blue'



    },
    usernametext: {
        fontFamily: 'Vazir',
        paddingRight: 3
    },
    viewpersonal: {

        alignItems: 'center',
        marginBottom: 5
    },
    textPrson: {
        direction: 'rtl',
        width: "85%",
        margin: 5,
        textAlign: "justify",
        fontFamily: "Vazir",
        padding: 10,
        borderRadius: 5,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 1,
        elevation: 4,
        marginBottom: 6,
        color: "#000",
        textAlignVertical: 'center',
        textAlign: 'right',
        backgroundColor:'white'
           },
    textPrsonResumeh: {
        textAlign: "justify",
        fontFamily: "Vazir",
        padding: 15,
        // paddingRight: 30,
        textAlign: 'right',
        // width: '100%',
    },
    navicon: {
        position: 'absolute',
        left: 13,
        top: -13,

    },
    ViewiconSignout: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent:'center',
    },
    signoutIcon: {
        direction: 'rtl',
        flexDirection: 'row',
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
        height:40,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor:'white'
    },
    containeredit: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 5,
        marginBottom:75
    },
    editprofile: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor:'white',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        width: 150,
        height: 35,
    },
    textedit: {
        fontSize: 14,
        fontFamily: 'Vazir',

    },
    iconedite: {
        fontSize: 18,
    },
    signout: {
        fontSize: 16,
        padding: 2,
    },
    textsignIn: {
        fontFamily: 'Vazir',
        paddingRight: 2,
        color: "#ff0000"

    },
    condtion:{
        // marginTop:70

    }


})


export default ProfileScreen;