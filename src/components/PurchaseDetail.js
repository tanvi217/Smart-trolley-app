import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ListItemDatewise from './ListItemDatewise';

class PurchaseDetail extends Component {
  render() {
    // purchase = this.props.purchase;
    const purchase = this.props.purchase;
    const items_list = Object.keys(purchase);
    const dataSource = [];
    console.log(items_list);
    for (var i = 0; i < items_list.length - 1; i++) {
      const key = items_list[i];
      dataSource.push(purchase[key]);
    }
    console.log(dataSource);

    return (
      <View>
        <FlatList
          data={dataSource}
          renderItem={({item}) => <ListItemDatewise purchase={item} />}
        />
      </View>
    );
  }
}

export default PurchaseDetail;
