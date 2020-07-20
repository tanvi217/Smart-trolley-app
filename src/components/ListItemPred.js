import React, {Component} from 'react';
import {Card, CardItem, Text, Body} from 'native-base';

class ListItemPred extends Component {
  render() {
    const {name, prediction} = this.props.pred;

    console.log(name, prediction);

    return (
      <Card>
        <CardItem header bordered>
          <Text>{`Item name - ${name}`}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{`Next month sales prediction - ${prediction}`}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default ListItemPred;
