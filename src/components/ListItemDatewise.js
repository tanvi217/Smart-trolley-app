import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Card, CardItem, Text, Body, Button} from 'native-base';

import {deleteItem} from '../actions';
class ListItemDatewise extends Component {
  state = {
    isConfirmed: this.props.purchase['isConfirmed'] === 'True',
    isRemoved: false,
  };

  deleteItem() {
    deleteItem(
      this.props.purchase.dateOfPurchase,
      this.props.purchase.key,
      this.props.purchase.totalprice - this.props.purchase.price,
      this.props.purchase.totalweight - this.props.purchase.weight,
    );
  }

  openTwoButtonAlert = () => {
    Alert.alert(
      'Delete Item',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.setState({isConfirmed: true});
            this.setState({isRemoved: true});
            this.deleteItem();
            this.forceUpdate();
          },
        },
        {
          text: 'No',
          onPress: () => console.log('No item was removed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  render() {
    const {name, price, expdate, mfdate, weight} = this.props.purchase;

    return (
      <Card>
        <CardItem header bordered>
          <Text>{`Item - ${name}`}</Text>
        </CardItem>
        <CardItem bordered>
          {this.state.isRemoved ? (
            <Body>
              <Text>Item has been removed.</Text>
            </Body>
          ) : (
            <Body>
              <Text>
                {`Item Price: ${price}\nItem weight: ${weight}\nManufacturing Date: ${mfdate}\nExpiry Date: ${expdate}`}
              </Text>
              {!this.state.isConfirmed && (
                <Button danger onPress={this.openTwoButtonAlert.bind(this)}>
                  <Text>Remove Item</Text>
                </Button>
              )}
            </Body>
          )}
        </CardItem>
      </Card>
    );
  }
}

export default ListItemDatewise;
