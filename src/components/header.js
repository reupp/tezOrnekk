import React, {Component} from 'react';
import { Text,Image } from 'react-native';
import {Container,Header,Left,Body,Right,Icon,Button,Title} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
     <Header>
       <Body>
         <Image source={require('../img/banner.png')} style={{width:150,height:50}}/>
       </Body>
     </Header>
    );
  }
}
module.export = AppHeader;
