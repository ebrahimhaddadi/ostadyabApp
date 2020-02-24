import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';



class DetailsScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      result: [{ name: 'زین الدین', family: 'زیدان', age: 48, field: 'فوتبال', img: require('../../assets/images/1.jpg'), details: 'زین الدین زیدان ملقب به زیزو بهترین  بازیکن سال جهان در سال های 1998 2000 2003 دوران بازی یونتوس ورئال مادرید ' }
        , {
          name: 'pyman', family: 'ahadi', age: 35,
        img: require('../../assets/images/2.jpg'), details: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد '
      }
        , { name: 'ایگور', family: 'کولاکویچ', age: 54, field: 'والیبال', img: require('../../assets/images/3.jpg'), details: 'ایگو کولاکویچ سرمربی کنونی تیم ملی والیبال ایران ملیتی مونته نگرویی دو بار فاتح جام ملت های اروپا دوبار قهرمان جام ملت های آسیا و قهرمان' },
      { name: 'مهرو', family: 'کامرانی', age: '40', field: 'تکواندو', img: require('../../assets/images/4.jpg'), details: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستو' },
      { name: 'مهدی', family: 'سلطانی', age: 39, field: 'کاراته', id: 4, img: require('../../assets/images/5.jpg'), details: 'ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده' },
      { name: 'رضا', family: 'نوری', age: 50, field: 'بسکتبال', id: 5, img: require('../../assets/images/6.jpg'), details: 'ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده' }],

      getId: this.props.navigation.getParam('itemId'),
      bookmark:[]
    }

  }
  sendData=()=>{
    const { navigation } = this.props;
    navigation.getParam('saveData')(this.state.getId);
    navigation.navigate('Requst', { itemId: this.state.getId });
  }
 




  render() {
    const { navigation } = this.props;
    // console.log(this.saveData)
    return (

      <View
        style={styles.mainView}
      >

        <View
          style={styles.ViewHeader}
        >
          <TouchableOpacity
            style={styles.goback}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-right"
              style={styles.gobackicon}
            />
          </TouchableOpacity>
          <Text
            style={styles.textHeader}
          >مشخصات</Text>
        </View>
        <View style={styles.body}>
          
            <Image
              source={this.state.result[this.state.getId].img}
              style={styles.cochImg}
            />
            <View
              style={styles.ViewText}
            >
              <Text
                style={styles.textnf}
              >
                نام:  {this.state.result[this.state.getId].name}
              </Text>
              <Text
                style={styles.textnf}
              >
                نام خانوادگی:{this.state.result[this.state.getId].family}
              </Text>
              <Text
                style={styles.textnf}
              >
                رشته:{this.state.result[this.state.getId].field}
              </Text>
              <Text
                style={styles.textdetails}
                numberOfLines={5}>
                توضیحات:{this.state.result[this.state.getId].details}
              </Text>

            </View>

            <View
              style={styles.ViewFinaly}
            >
              <Text
                style={styles.textprass}
              >برای ثبت درخواست دکمه زیر را بفشارید</Text>
              <TouchableOpacity
                style={styles.finaly}
                onPress={() =>this.sendData() }
              >
                <Text
                  style={styles.textFinaly}
                >ثبت درخواست</Text>
              </TouchableOpacity>
            </View>
          
        </View>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white'
  },

  ViewHeader: {
    flexDirection: 'row',
    backgroundColor: '#e6e9ed',
    height: 60,
    alignItems: 'center',
  },
  gobackicon: {
    fontSize: 20,
    paddingRight: 8
  },
  textHeader: {
    flex: 0.93,
    fontFamily: 'Vazir',
    fontSize: 18,
    textAlign: 'center',
  },
  ViewText: {
    alignItems: "center",
    justifyContent:'center',
    borderBottomWidth:0.5
  },
  body: {
    flex: 1,
    justifyContent:"space-evenly",
    alignItems:'stretch',
    paddingLeft:15,
    paddingRight:15
  },
  textnf: {
    padding: 10,
    fontFamily: 'Vazir',
     alignSelf:'baseline',
     borderBottomWidth:0.3,
     width:'100%'
     
   
  },
  textdetails: {
    fontFamily: 'Vazir',
    padding: 5,
    lineHeight: 25,
    alignSelf: "baseline"

  },
  ViewText2: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    padding: 3,
    fontFamily: 'Vazir',
  },


  cochImg: {
    alignSelf: "auto",
    borderRadius: 15,
    borderWidth: 0.1,
    width: 140,
    height: 140,
  },
  navicon: {
    marginTop: 0,
    position: 'absolute',
    top: 14,
    left: 14,

  },
  ViewFinaly: {
    alignItems: 'center',
    marginTop: 20,
  },
  finaly: {
    width: 130,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#3897F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFinaly: {
    color: '#FAFDFF',
    fontFamily: 'Vazir',
    fontSize: 16,
  },
  textprass: {
    fontFamily: 'Vazir',
    fontSize: 16,
    marginBottom: 10
  }

});

export default DetailsScreen;
