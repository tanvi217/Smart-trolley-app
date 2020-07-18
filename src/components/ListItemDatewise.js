import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import {connect} from 'react-redux';

import {deleteItem} from '../actions';
import {CardSection, Button} from './common';
class ListItemDatewise extends Component {
  deleteItem() {
    deleteItem(
      this.props.purchase.dateOfPurchase,
      this.props.purchase.key,
      this.props.purchase.totalweight - this.props.purchase.weight,
      this.props.purchase.totalprice - this.props.purchase.price,
    );
  }

  openTwoButtonAlert = () => {
    console.log(this.props);
    Alert.alert(
      'Delete Item',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteItem()},
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
    const {
      name,
      price,
      expdate,
      mfdate,
      weight,
      isConfirmed,
    } = this.props.purchase;

    return (
      <View>
        <CardSection>
          <Text style={styles.labelStyle}>
            {`Item name: ${name}\nItem Price: ${price}\nItem weight: ${weight}\nManufacturing Date: ${mfdate}\nExpiry Date: ${expdate}`}
          </Text>
        </CardSection>
        <CardSection>
          {isConfirmed === 'False' && (
            <Button onPress={this.openTwoButtonAlert.bind(this)}>
              Remove Item
            </Button>
          )}
        </CardSection>
      </View>
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

export default ListItemDatewise;
