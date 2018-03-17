import React, {Component} from 'react';
import { Text} from 'react-native';
import {Footer,FooterTab,Button,Icon,} from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
          <FooterTab>
            <Button active vertical>
              <Icon active name="egg" />
              <Text>Feed</Text>
            </Button>
            <Button vertical>
              <Icon name="paper" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
module.export = AppFooter;
