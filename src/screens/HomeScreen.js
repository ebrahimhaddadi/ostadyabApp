import React, { Component } from 'react';
import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity, Animated, ActivityIndicator, Button,AsyncStorage,I18nManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
class HomeScreen extends Component {
  static navigationOptions = {
    header:null,
  };
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  // };
  constructor(props) {
    super(props)
    this.state = {
      result: [{ name: 'زین الدین', family: 'زیدان', age: 48, id: 0, field: 'فوتبال', img: require('../../assets/images/1.jpg') },
      {
        name: 'pyman', family: 'ahadi', age: 35, id: 1,
        img: require('../../assets/images/2.jpg')
      }
        , { name: 'ایگور', family: 'کولاکویچ', age: 54, field: 'والیبال', id: 2, img: require('../../assets/images/3.jpg') },
      { name: 'مهرو', family: 'کامرانی', age: '40', field: 'تکواندو', id: 3, img: require('../../assets/images/4.jpg') },
      { name: 'مهدی', family: 'سلطانی', age: 39, field: 'کاراته', id: 4, img: require('../../assets/images/5.jpg') },
      { name: 'رضا', family: 'نوری', age: 50, field: 'بسکتبال', id: 5, img: require('../../assets/images/6.jpg') }],
      filters: [{ name: '', family: '', age: 0, field: '', resumeh: '', locatoin: '' }],
      //  isLoading:true,
      progress: new Animated.Value(0),
      iconAnimating: true,
      imageURL: '',
      results: [],
      bookmark:[],
      
    }

  }


  // componentDidMount() {
  //   fetch('https://localhost:44377/api/users')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({results:responseJson,isLoading:false})
  //     console.log(responseJson)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }
  saveData=(id)=>{
    let myArray=this.state.bookmark;
    let book = new Object();
      book.name=this.state.result[id].name;
      book.family=this.state.result[id].family;
      book.img=this.state.result[id].img,
    
    myArray.push(book);
    // console.log(myArray)
    this.setState({bookmark:myArray},()=>this.SetAsync());
    console.log(this.state.bookmark)
  }
  SetAsync = async () => {
    AsyncStorage.setItem('bookmark', JSON.stringify(this.state.bookmark));
  }
  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (


      <View
        style={styles.scondeView}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Details', { itemId: item.id,saveData:this.saveData}) }}
        >
          <View style={styles.ViewImag}>
            <Image
              source={item.img}
              style={styles.cochImg}
            />
          </View>
          <View style={styles.ViewText2}>
            <Text
              style={styles.text}
            >نام:{item.name}</Text>
            <Text
              style={styles.text}>نام خانوادگی:{item.family}</Text>
            <Text
              style={styles.text}>سن:{item.age}</Text>
            <Text
              style={styles.text}
            >رشته:{item.field}</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  };
  _filters = ({ item }) => {
    return (
      <View style={styles.mainViewFilter}>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >فیلترها</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}>
          <Text
            style={styles.textFilter}
          >اسم</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >فامیلی</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >سن</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >رشته</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >رزومه</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemFilter}
        >
          <Text
            style={styles.textFilter}
          >مکان</Text>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator />
      )
    }
    console.log(this.saveData)

    const { navigate } = this.props.navigation;

    return (

      <View style={styles.mainView}>
        <View
          style={styles.ViewHeader}
        >
          <Text
            style={styles.textHeader}
          >خانه</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={styles.navicon}
          >
            <Icon name="navicon" size={30} color="blue" />
          </TouchableOpacity>
        </View>
        {/* <FlatList
                 data={this.state.filters}
                 renderItem={this._filters}
                 keyExtractor={({item,index})=>{index+'' }}
                 horizontal={true}
                 inverted={true}
                 showsHorizontalScrollIndicator={false}
                 
                 /> */}

        <FlatList
          data={this.state.result}
          renderItem={this.renderItem}
          keyExtractor={({ item, index }) => { index + '' }}
          showsVerticalScrollIndicator={false}
        />

                <Text>{this.state.results.Name}</Text>
                {this.BookMarkArray}

      </View>


    )
  }
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'whitesmoke',

  },
  scondeView: {
    flexDirection: 'column',
    margin: 10,
    borderWidth: 0.3,
    backgroundColor: 'white',
    borderRadius: 15,
    height: "auto",
    alignItems: 'center',
  },
  ViewHeader: {
    flexDirection: 'row',
    direction: 'rtl',
    height: 65,
    backgroundColor: '#e6e9ed',
    justifyContent: 'center',
    alignItems: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' ,
  },
  textHeader: {
    fontFamily: 'Vazir',
    fontSize: 20,
   
  },
  ViewText: {
    borderRadius: 15,
    borderWidth: 0.1,
    backgroundColor: 'white',
  },
  ViewText2: {
    padding: 7,
    alignItems:"baseline"
  },
  text: {
    padding: 2,
    fontFamily: 'Vazir',
    textAlign: "right",
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' ,
  },
  ViewImag: {
    width: 270,
    height: 170,
  },
  cochImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 0.1,
    width: '100%'
  },
  Footer: {
    position: 'absolute',
    bottom: 0,
  },
  mainViewFilter: {
    flexDirection: 'row',
    marginBottom: 10,
    alignContent: 'center',
    backgroundColor: 'white',
    height: 60,
  },
  itemFilter: {
    paddingLeft: 30,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textFilter: {
    borderWidth: 0.1,
    textAlign: 'center',
    alignContent: 'center',
    fontFamily: "Vazir",
    backgroundColor: "#50e6b9",
    borderRadius: 20,
    width: 80,
    height: 30,
  },
  navicon: {
    position: 'absolute',
    top: 14,
    left: 13,


  }
});



export default withNavigation (HomeScreen);
