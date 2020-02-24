import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid,AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};



class RequstScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: 'first',
      visible: false,
      getId:this.props.navigation.getParam('itemId'),
      BookMarkArray:[]
    }
  }
 componentDidMount(){

 }


  handleButtonPress = () => {
    this.setState(
      {
        visible: true,
      },
      () => {
        this.hideToast();
      },
    );
    
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };
  Goback_home = () => {
    if (this.state.checked == 'second') {
      this.props.navigation.navigate("Home")
    }
  }

  render() {
    const { checked } = this.state;
    const { navigation } = this.props;
    // this.Goback_home()
    // console.log(this.props.navigation.getParam('itemId'))
    return (
      <View
        style={styles.mainView}
      >


        <View
          style={styles.headerView}
        >
            <TouchableOpacity
                style={styles.goback}
                onPress={()=>navigation.goBack()}
                >
                  <Icon name="arrow-right"
                  style={styles.gobackicon}
                  />
                </TouchableOpacity>
          <Text
            style={styles.textheader}
          >صفحه درخواست</Text>

        </View>
        <View
          style={styles.secondview}
        >
          <Text
            style={styles.textValid}
          >
            آیا از درخواست خود مطمئن هستید
                        </Text>
          <Text
            style={styles.textValid}
          >
            برای نهایی کردن درخواست خود دکمه ثبت نهایی را فشار دهید
            بعداز فشار دادن دکمه همکاران مادر اصرع وقت با شما تماس خواهند گرفت
                        </Text>


          <TouchableOpacity
            style={styles.buttonrequst}
            onPress={this.handleButtonPress}
          >
            <Text
              style={styles.finalyreq}
            >ثبت نهایی درخواست</Text>

          </TouchableOpacity>
          <Toast visible={this.state.visible} message="درخواست شما ثبت شد بعد از برسی نهایی اطلاع داده خواهد شد"
            style={{ backgroundColor: '#00ffff' }}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerView: {
    // direction: 'rtl',
    backgroundColor: '#e6e9ed',
    height: 63,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainView: {
    flex: 1,
  },

  textheader: {
    flex:0.75,
    fontFamily: 'Vazir',
    fontSize: 19
  },
  gobackicon:{
    fontSize:20,
    paddingRight:8
  },
  textValid: {
    fontSize: 20,
    fontFamily: 'Vazir',
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: '90%',
    textAlign: 'center',



  },
  secondview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  buttonrequst: {
    direction: 'rtl',
    width: 150,
    fontFamily: 'Vazir',
    borderRadius: 5,
    backgroundColor: '#3897F0',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    // width:'90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'

  },
  mainRadiobutton: {
    direction: 'rtl',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  checkbox: {
    fontFamily: 'Vazir',
    fontSize: 16,
  },
  finalyreq: {
    fontFamily: 'Vazir',
  }

})

export default RequstScreen;
