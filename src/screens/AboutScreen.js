import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Linking,I18nManager} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setCustomText } from 'react-native-global-props';

setCustomText({
    style: { textAlign: 'left' }
});

 class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.mainview}>
              <View style={styles.header}>
                  <Text style={styles.headertext}>درباره ما</Text>
                  </View> 
                  <View
                  style={styles.container}
                  >
                  <View style={styles.body}>
                      <Text style={styles.bodytext}>
                          این برنامه برای پیدا کردن مربی
                           باهر  مهارت و توانایی 
                          می باشد
                          <Text>{'\n'}</Text>
                         سعی ما بر این است که شما را در پیدا کردن مربی 
                         یاری نماییم 
                         راه های ارتباط باما: 
                      </Text>
                      </View> 
                      <View
              style={styles.footer}
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
            </View>
        )
    }
}
export default AboutScreen;
const styles=StyleSheet.create({
mainview:{
    flex:1,
    
},
header:{
    height:63,
    backgroundColor:"#e6e9ed",
    justifyContent:"center",
    alignItems:'center',
},
headertext:{
    fontFamily:"Vazir",
    fontSize:19
},
container:{
    flex:1,
    justifyContent:"space-around",
    
},
body:{
    justifyContent:'center',
    alignItems:'center',
    // marginTop:60,
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' ,
    
},
bodytext:{
    fontFamily:"Vazir",
    fontSize:19,
    width:'75%',
    lineHeight:60,
},
footer:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:30
  
},
icons:{
    flexDirection:'row',
    fontSize:30,
    color:'blue',
    marginLeft:15
    
},
})
