import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
 class EditProfileScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)
        this.state = {
            result:{id:null,  name: '', family: '', age:null , field: '', username:"" ,phonenumber:0 ,details:"" ,pickedImage: null,},
            isLoading:true,
            results:[],
            pickedImage: null

    }
}
// componentDidMount(){
    
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
    
//     var raw = JSON.stringify({"name":"ebi","fname":"hadadi","phoneNumber":"09375176420","expId":3,"photo":"","sex":"male","details":"knlnknk","expage":"m m m","username":"alavi"});
    
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };
    
//     fetch("https://localhost:44377/api/profile", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
// }


reset = () => {
    this.setState(prevState=>({
        result:{
            ...prevState.result,
            pickedImage: null,
        }
    }));
  }
   createFormData = (photo, body) => {
    const data = new FormData();
  
    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data;
  };
  
  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600,}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState(prevState=>({
            result:{
                ...prevState.result,
                pickedImage: { uri: res.uri }
            }
        })
      
        );

      }
    });
  }

  resetHandler = () =>{
    this.reset();
  }
  
  Edit=()=> {
    const { navigation } = this.props;
    navigation.getParam('callback')(this.state.result);
    navigation.navigate('Profile');
    this.handleUploadPhoto();
}
handleUploadPhoto = () => {
    // const data = {
    //     "Name": this.state.result.name,
    //        "PhoneNumbre":this.state.result.phonenumber,
    //        "Fname":this.state.result.family,
    //        "Datails":this.state.result.details,
    //        "Username":this.state.result.username,
    //        "Photo":this.state.pickedImage,
    //     }
    // fetch("https://localhost:44377/api/profile", {
    //   method: "POST",
    //   body: this.createFormData(this.state.pickedImage, {data})
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log("upload succes", response);
    //     alert("Upload success!");
    //     this.setState({pickedImage: null });
    //   })
    //   .catch(error => {
    //     console.log("upload error", error);
    //     alert("Upload failed!");
    //   });
     const data = {
             "id":this.state.result.id,
            "Name": this.state.result.name,
               "PhoneNumbre":this.state.result.phonenumber,
               "Fname":this.state.result.family,
               "Datails":this.state.result.details,
               "Username":this.state.result.username,
               "Photo":this.state.pickedImage,
            }
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id":null,"name":"ebi","fname":"ljbkugiu","phoneNumber":"0123456","expId":3,"photo":"","sex":"male","details":"hooyoh","expage":"ihihih","username":"alavi"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://localhost:44377/api/profile", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  };

    render() {
        if(this.state.isLoading){
            <ActivityIndicator/>
        }
        const { navigation } = this.props;
        // const navigation = this.props.navigation;
        
        // console.log(this.state.result.name)
        // console.log(this.state.result.family)
        // console.log(this.state.result.age)
        // console.log(this.state.result.phonenumber)
        // console.log(this.state.result.field)
        // console.log(this.state.result.details)
        // console.log(this.state.result.username)
        return (
            <View
            style={styles.mainview}
            >
                <View
                style={styles.headerview}
                >
                     <TouchableOpacity
                style={styles.goback}
                onPress={()=>navigation.navigate("Profile")}
                >
                  <Icon name="arrow-right"
                  style={styles.gobackicon}
                  />
                </TouchableOpacity>
                    <Text
                    style={styles.textheader}
                    >ویرایش پروفایل</Text>
                </View>
                <ScrollView>
             <View style={styles.viewimage}>
            <Image source={this.state.result.pickedImage} style={styles.uploadAvatar} />
            <TouchableOpacity
            style={styles.plusimger}
            onPress={this.pickImageHandler}
            >
                <Text
                style={styles.textplus}
                >یک عکس اضافه کنید</Text>
                {/* <Icon name="plus"
                style={styles.plusicon}
                /> */}
            </TouchableOpacity>
            </View>
            <View
            style={styles.maintextinput}
            >
              
            <TextInput
            placeholder="نام"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState => ({
                result: {                   // object that we want to update
                    ...prevState.result,    // keep all other key-value pairs
                    name: text       // update the value of specific key
                }
            }))}
            />
            </View>
            <View
            style={styles.maintextinput}
            >
               
            <TextInput
            placeholder="نام خانوادگی"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
                result:{
                    ...prevState.result,
                       family:text
                }
            }))}
            />
            </View>
            <View
            style={styles.maintextinput}
            >
             
            <TextInput
            placeholder="نام کاربری"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
                result:{
                    ...prevState.result,
                    username:text
                }
            }))}
            />
            </View>
            <View
            style={styles.maintextinput}
            >
               
            <TextInput
            placeholder="سن"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
                result:{
                    ...prevState.result,
                    age:text
                }
            }))}
            />
            </View>
            <View
            style={styles.maintextinput}
            >
              
            <TextInput
            placeholder="شماره تلفن"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
                result:{
                    ...prevState.result,
                    phonenumber:text
                }
            }))}
            />
            </View>
            <View
            style={styles.maintextinput}
            >
               
            <TextInput
            placeholder="رشته"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
               result:{
                   ...prevState.result,
                   field:text
               }

            }))}

            />
            </View>
            <View
            style={styles.maintextinput}
            >
               
            <TextInput
            placeholder="افتخارات"
            style={styles.textinput}
            onChangeText={(text)=>this.setState(prevState=>({
                result:{
                    ...prevState.result,
                    details:text
                }
            }))}
            />
            <TouchableOpacity
              onPress={this.Edit}
            style={styles.finalyBtn}
        
            >
                <Text
                style={styles.textfinaly}
                >ثبت اطلاعات</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        )
    }
};
const styles=StyleSheet.create({
mainview:{
    flex: 1,
    direction:'rtl'
},
headerview:{
    
    backgroundColor: "#e6e9ed",
    height:65,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
},
textheader:{
    flex:0.72,
    fontFamily: 'Vazir',
    fontSize:18,
    textAlignVertical:'center',
},
gobackicon:{
    fontSize:20,
    paddingRight:8
},
senddata:{
    position:'absolute',
    top:14,
    left:14,
},
iconheader:{
    // position:'absolute',
    // top:18,
    // left:14,
    fontSize:28,
    color:'blue',
},

    uploadAvatar:{
        width:130,
        height:130,
        borderWidth:0.5,
        borderRadius:90,
        backgroundColor:'blue'
    },
    viewimage:{
        // flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        // position:'relative'
    },

    plusimger:{
        borderRadius:6,
        borderWidth:0.9,
        width:"auto",
        justifyContent:'center',
        alignItems:'center',
        marginTop:7,
        padding:3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        // alignSelf:'flex-end',
        // position:'absolute',
        // bottom:15,
        // right:125,
    },
    textplus:{
        fontFamily:'Vazir'
    },
    plusicon:{
        fontSize:16,
        
    },
    maintextinput:{
    justifyContent:'center',
    alignItems:'center',
    padding:3
    },
    textinput:{
        backgroundColor:'white',
        direction: 'rtl',
        width: "85%",
        margin: 5,
        textAlign: "justify",
        fontFamily: "Vazir",
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginBottom: 2,
        color: "#000",
        textAlignVertical: 'center',
        textAlign: 'right'

    },
    finalyBtn:{
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'#33ccff',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius:18,
        width:110,
        height:40,
        marginTop:12,
        marginBottom:10,

    },
    textfinaly:{
        fontFamily:"Vazir",
    }

 
})
export default EditProfileScreen;
