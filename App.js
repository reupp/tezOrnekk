import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,StyleProvider} from 'native-base';
import getTheme from './src/themes/components';
import appTheme from './src/themes/variables/appTheme.js';
import AppHeader from './src/components/header';
import AppBody from './src/components/body';
import AppFooter from './src/components/footer';

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(appTheme)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({

});
