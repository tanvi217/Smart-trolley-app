import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardItem, Text, Body} from 'native-base';

class ListItem extends Component {
  onRowPress() {
    Actions.purchaseDetail({purchase: this.props.purchase});
  }

  render() {
    const {uid, total} = this.props.purchase;
    // const {totalprice, totalweight} = total;

    console.log(total);

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Card>
          <CardItem header bordered>
            <Text>{`Purchase Date`}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{`${uid}`}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
