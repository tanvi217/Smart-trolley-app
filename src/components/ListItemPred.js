import React, {Component} from 'react';
import {Card, CardItem, Text, Body} from 'native-base';

class ListItemPred extends Component {
  render() {
    const {name, prediction} = this.props.pred;

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

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default ListItemPred;
