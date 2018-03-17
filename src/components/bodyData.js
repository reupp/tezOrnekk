import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {Content, Card, CardItem,Body} from 'native-base';
import {Griddle} from 'griddle-react';
export default class AppBodyData extends React.Component {
  render(){
    let articles=this.props.data.map(function(articleData,index){
        return(
          <Card>
          <CardItem>
            <Body>
              <Text>{articleData.title}</Text>
              <Text>{articleData.releaseYear}</Text>

            </Body>
          </CardItem>
          </Card>
        )
    })
return(
    <Content>
      {articles}
      {articles}

    </Content>
  );
}

}
module.export = AppBodyData;
