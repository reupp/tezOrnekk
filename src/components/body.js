import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {Content, Card, CardItem,Body} from 'native-base';
import AppBodyData from './bodyData.js';
export default class AppBody extends React.Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  getData(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data:responseJson.movies})
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentDidMount(){
      this.getData();
  }
  render() {
    return (
        <AppBodyData data={this.state.data}/>
    );
  }
}
const styles=StyleSheet.create({
  bodyText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
    color:'red',
    fontSize:40
  },
});
module.export = AppBody;
