import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

import {CardSection, Button} from './common';
import ListItemDatewise from './ListItemDatewise';
import {confirmOrder} from '../actions';

class PurchaseDetail extends Component {
  state = {
    isConfirmed: this.props.purchase['isConfirmed'] === 'True',
  };

  onButtonPress() {
    this.setState({isConfirmed: false});
    confirmOrder(this.props.purchase.uid);
  }

  render() {
    const purchase = this.props.purchase;
    const items_list = Object.keys(purchase);
    const dataSource = [];
    const tot_pr = [];
    if (items_list) {
      var i = 0;
      for (i = 1; i < items_list.length - 2; i++) {
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
      // console.log(tot_pr);
      // console.log(dataSource);
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={dataSource}
          renderItem={({item}) => <ListItemDatewise purchase={item} />}
        />
        <CardSection>
          <Text style={styles.labelStyle}>
            {`Total Price: ${tot_pr[1]}\nTotal weight: ${tot_pr[0]}`}
          </Text>
        </CardSection>
        {this.state.isConfirmed ? (
          <CardSection>
            <Button>Confirmed order</Button>
          </CardSection>
        ) : (
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Confirm Order
            </Button>
          </CardSection>
        )}
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

export default PurchaseDetail;
