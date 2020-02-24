import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  I18nManager
} from "react-native";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setCustomText } from 'react-native-global-props';

setCustomText({
    style: { textAlign: 'right' }
});
 class CustomComponent extends Component {
    static navigationOptions = {
        header:null,
      };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
        <View style={styles.containertopRow}>
          <Image
            style={styles.imageTopRow}
            source={require("../../assets/images/profile.png")}
          />
        </View>
        <View style={styles.containerBottom}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>خانه</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Profile')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>پروفایل</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Recently')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>درخواست های اخیر</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('About')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>درباره ما</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    direction:'rtl',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  containertopRow: {
    width:225,
    marginTop: 30,
    marginBottom:15,
    justifyContent: "center",
    alignItems: 'center',
    
  },
  txtBottom: {
    color: '#000',
    fontSize: 16,
    fontFamily:'Vazir',
  },
  imageTopRow: {
    height: 80,
    width: 80,
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowText: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: 'white',
    marginTop:10,
   
  },
  containerBottomItem: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor:"#000",
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' ,
    
  },
  footerControl:{
    marginBottom:15,
    flexDirection:'row',
    justifyContent:'space-evenly'
    
},
icons:{
    flexDirection:'row',
    fontSize:20,
    color:'blue',
    marginLeft:15
    
},
});
export default withNavigation (CustomComponent);