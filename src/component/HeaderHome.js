import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native'
import { Container, Header, Content, Icon } from 'native-base';


class HeaderHome extends Component {
  render() {
    return (
      <Container 
      style={styles.main}
      >
        <Header
         style={styles.main} />
        <Content>
        
          <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
          <Icon type="FontAwesome" name="home" />
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
  main:{
    backgroundColor:'#e6e9ed',
  }
})
export default HeaderHome;