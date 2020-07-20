import React, {Component} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Container, Body, Button, Text, Card, CardItem} from 'native-base';

import ListItemDatewise from './ListItemDatewise';
import {confirmOrder} from '../actions';

class PurchaseDetail extends Component {
  state = {
    isConfirmed: this.props.purchase.isConfirmed === 'True',
    totalprice: this.props.purchase.total['totalprice'],
    totalweight: this.props.purchase.total['totalweight'],
    weightSensor: this.props.purchase.weightSensor,
  };

  onButtonPress() {
    Alert.alert(
      'Confirm order',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.setState({isConfirmed: true});
            confirmOrder(this.props.purchase.uid);
          },
        },
        {
          text: 'No',
          onPress: () => console.log("Order wasn't confirmed"),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  }

  render() {
    // console.log(this.state, this.props.purchase);
    console.log(this.state.weightSensor === this.state.totalweight);

    const purchase = this.props.purchase;
    const items_list = Object.keys(purchase);
    const dataSource = [];
    const tot_pr = [];
    if (items_list) {
      var i = 0;
      for (i = 1; i < items_list.length - 3; i++) {
        const key = items_list[i];
        purchase[key].key = key;
        purchase[key].dateOfPurchase = purchase['uid'];
        purchase[key].isConfirmed = purchase['isConfirmed'];
        purchase[key].totalprice = purchase['total'].totalprice;
        purchase[key].totalweight = purchase['total'].totalweight;
        dataSource.push(purchase[key]);
      }
      const key = items_list[i];
      const tot = purchase[key];
      const {totalprice, totalweight} = tot;
      tot_pr.push(totalprice);
      tot_pr.push(totalweight);
    }

    return (
      <Container>
        <View style={{flex: 1}}>
          <FlatList
            data={dataSource}
            renderItem={({item}) => <ListItemDatewise purchase={item} />}
          />

          <Card>
            <CardItem header>
              <Text>Total</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`Price - ${tot_pr[0]}\nWeight - ${tot_pr[1]}`}</Text>
              </Body>
            </CardItem>
          </Card>

          {!(this.state.weightSensor === this.state.totalweight) && (
            <Card>
              <CardItem>
                <Body>
                  <Text>Please check your cart</Text>
                </Body>
              </CardItem>
            </Card>
          )}

          {this.state.isConfirmed ? (
            <Button block success>
              <Text>Order Confirmed</Text>
            </Button>
          ) : (
            <Button
              block
              onPress={this.onButtonPress.bind(this)}
              disabled={this.state.weightSensor !== this.state.totalweight}>
              <Text style={{alignItems: 'center'}}>Confirm Order</Text>
            </Button>
          )}
        </View>
      </Container>
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

export default PurchaseDetail;
