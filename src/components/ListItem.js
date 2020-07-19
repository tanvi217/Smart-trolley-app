import React, {Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common/CardSection';
import {Actions} from 'react-native-router-flux';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from 'native-base';

class ListItem extends Component {
  onRowPress() {
    Actions.purchaseDetail({purchase: this.props.purchase});
  }

  render() {
    const {uid, total} = this.props.purchase;
    const {totalprice, totalweight} = total;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Card>
          <CardItem header bordered>
            <Text>{`Purchase Date - ${uid}`}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{`Total Price - ${totalprice}`}</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
