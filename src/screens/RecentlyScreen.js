import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, AsyncStorage, Image, FlatList,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecentlyScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            getId: this.props.navigation.getParam('itemId'),

        }
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', this.componentDidFocus);
        this.componentDidFocus();
    }


    componentDidFocus = () => {
        this.SetBookMark();
    }



    SetBookMark = async () => {
        let myArray = JSON.parse(await AsyncStorage.getItem("bookmark"));
        this.setState({ data: myArray });
    }
    // displayData = async () => {
    //     try {
    //         let bookmark = await AsyncStorage.getItem('bookmark');
    //         let parsed = JSON.parse(bookmark);
    //         this.setState({ name: parsed.name, img: parsed.img, family: parsed.family })
    //         //   alert(parsed.img)
    //     }
    //     catch (error) {
    //         alert(error)
    //     }
    // }
    renderItem = ({item}) => {
        return (
            <View
            style={styles.mainflat}
            >
                <Image source={item.img}
                style={styles.image}
                />
                <View style={styles.viewtextflat}>
                <Text
                style={styles.textflat}
                >{item.name}</Text>
        <Text
        style={styles.textflat}
        >{item.family}</Text>
        </View>
            </View>
        )
    }

    render() {
        // console.log(this.state.data);
        // this.displayData()
        // console.log("545454545")
        // console.log(this.state.data)
        return (
            <View style={styles.mainview}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>درخواست های اخیر من</Text>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={({ item, index }) => { index + '' }}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        style={{marginBottom:50}}
                    />
                </View>

            </View>
        )
    }
}
export default RecentlyScreen;
const styles = StyleSheet.create({
    mainview: {
        flex: 1,

    },
    header: {
        height: 63,
        backgroundColor: "#e6e9ed",
        justifyContent: "center",
        alignItems: 'center',
    },
    headertext: {
        fontFamily: "Vazir",
        fontSize: 16
    },
    body: {
        marginTop:50,
        justifyContent: 'center',
        alignItems:'center',
    },
    bodytext: {
        fontFamily: "Vazir",
        fontSize: 19,
        width: '70%',
        lineHeight: 60,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30

    },
    mainflat:{
        maxWidth: Dimensions.get('window').width /2,
        backgroundColor: '#fff',
        padding:10
    
        
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        width:160,
        height:160,
        borderWidth:0.5,
        borderRadius:15,
        backgroundColor:"red",
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation:2,
        shadowOpacity:0.8,
    },
    viewtextflat:{
        flexDirection:'row',
        justifyContent:"center",
        padding:10
    },
    textflat:{
        fontFamily:'Vazir',
        alignSelf:'center',
        padding:3
    }
})
