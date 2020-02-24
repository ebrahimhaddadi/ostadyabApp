import * as React from 'react';
import { Text, View,TouchableOpacity, StyleSheet,Linking } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
// import ProfileScreen from '../screens/ProfileScreen'
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

 class ControlPanel extends React.Component {
     constructor(props){
         super(props);
         this.state={}
     }
  
    render() {
      const  closeControlPanel = () => {
            this._drawer.close()
          };
        const {navigation}=this.props
        return (
            <View
            style={styles.mainViewControl}
            >
                <View
                style={styles.secondView}
                >
                {/* <ControlContainer /> */}
                {/* <TouchableOpacity
                onPress={()=>this.closeControlPanel}
                >
                    <Icon name="arrow-right"/>
                </TouchableOpacity> */}
              <TouchableOpacity
              onPress={()=>navigation.navigate('Home')}
              style={styles.container}
              >
                  <Icon name="home" 
                   style={styles.iconcontainer}
                  />
                  <Text
                  style={styles.textControl}
                  >صفحه اصلی</Text>
              </TouchableOpacity>  
              
              <TouchableOpacity
              onPress={()=>navigation.navigate('Profile')}
              style={styles.container}
              >
                  <Icon name="user"
                   style={styles.iconcontainer}
                  />
                  <Text
                        style={styles.textControl}
                  >پروفایل</Text>
              </TouchableOpacity> 
              
              <TouchableOpacity
              onPress={()=>navigation.navigate('Signup')}
              style={styles.container}
              >
                  <Icon name="sign-in"
                  style={styles.iconcontainer}
                  />
                  <Text
                  style={styles.textControl}
                  >
                      ثبت نام
                  </Text>
              </TouchableOpacity>
              </View>
              <View
              style={styles.footerControl}
              >
                <Icon name='facebook'
                style={styles.icons}/>
                <TouchableOpacity
                onPress={
                    ()=>{
                        let url='https://www.instagram.com/ostadyab20/';
                        Linking.openURL(url).then((data)=>{
                            console.log('open instagram',data)
                        }).catch(()=>{
                         console.log('App not installed')
                        });
                    }
                }
                >
                <Icon name='instagram'
                style={styles.icons}
                />
                </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => {
                let url = 'https://t.me/OstadYab20';
                Linking.openURL(url).then((data) => {
                  console.log('open telegram', data)
                }).catch(() => {
                  console.log('App not installed')
                });
              }} >
                   <Icon name='telegram'
                style={styles.icons}
                />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={
                    ()=>{
                        let url='https://twitter.com/YabOstad';
                        Linking.openURL(url).then((data)=>{
                            console.log('open twitter',data)
                        }).catch(()=>{
                         console.log('App not installed')
                        });
                    }
                }
                >
                <Icon name='twitter'
                style={styles.icons}
                />
                </TouchableOpacity>
              </View>
            </View>
        )
    }
};
const styles=StyleSheet.create({
    mainViewControl:{
        flex:1,
        direction:"ltr",
        backgroundColor: '#e6e9ed', 
        paddingTop:30,
        paddingLeft:30,

        
    },
    container:{
        direction:'rtl',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginRight:7,
        marginTop:25,
        alignItems:'center',
        
        
    },
    iconcontainer:{
        borderWidth:0.3,
        width:23,
        height:23,
        fontSize:18,
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:50,
        color: 'blue',
        margin:10
    },
    textControl:{
        // padding:15,
        color:'black',
        fontFamily:'Vazir'

    },

    footerControl:{
        // flexDirection:'row',
        //   position: 'absolute',
        //   bottom:5,
        //   left:15,
        // height:,
        flexDirection:'row',
        marginBottom: 10,
        justifyContent:'space-evenly'
        
    },
    icons:{
        // flex:1,
        flexDirection:'row',
        // justifyContent:'space-around',
        // alignItems:'center',
        // padding:25,
        fontSize:20,
        color:'blue',
        marginLeft:15
        
    },
    secondView:{
        flex:1,
    }

})

// const AppNavigator = createStackNavigator({
//     Home:HomeScreen,
//     Details:DetailsScreen,
//     Profile:ProfileScreen,
  
//   },
//   );
//   const ControlContainer = createAppContainer(AppNavigator);
  

  export default withNavigation (ControlPanel);
