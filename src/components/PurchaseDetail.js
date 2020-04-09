import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {CardSection} from './common';
import ListItemDatewise from './ListItemDatewise';

class PurchaseDetail extends Component {
  render() {
    // purchase = this.props.purchase;
    const purchase = this.props.purchase;
    const items_list = Object.keys(purchase);
    const dataSource = [];
    const tot_pr = [];
    console.log(items_list);
    if (items_list) {
      var i = 0;
      for (i = 0; i < items_list.length - 2; i++) {
        const key = items_list[i];
        dataSource.push(purchase[key]);
      }
      const key = items_list[i];
      const tot = purchase[key];
      const {totalprice, totalweight} = tot;
      tot_pr.push(totalprice);
      tot_pr.push(totalweight);
      console.log(tot_pr);
    }

    return (
      <View>
        <FlatList
          data={dataSource}
          renderItem={({item}) => <ListItemDatewise purchase={item} />}
        />
        <CardSection>
          <Text style={styles.labelStyle}>
            {`Total Price: ${tot_pr[0]}\nTotal weight: ${tot_pr[1]}`}
          </Text>
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

export default PurchaseDetail;
