import React, { Component } from 'react';
import { Container, Header, Content, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
 class Footer extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Icon name='home' />
        </Content>
      </Container>
    );
  }
}
export default Footer;