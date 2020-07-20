import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {CardSection} from './common/CardSection';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import firebase from 'firebase';
import {Card, CardItem, Text, Body} from 'native-base';

import ListItemPred from './ListItemPred';

const screenWidth = Dimensions.get('window').width;

class PurchasePred extends Component {
  state = {
    sales_months: [],
    predictions: [],
  };

  componentWillMount() {
    // const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/WqcFBidhthQdWTSXzMVVyEVPu6D2/Sales`)
      .on('value', (snapshot) => {
        // console.log(Object.values(snapshot.val()));
        this.setState({sales_months: Object.values(snapshot.val())});
      });
    firebase
      .database()
      .ref(`/users/WqcFBidhthQdWTSXzMVVyEVPu6D2/Predictions`)
      .on('value', (snapshot) => {
        // console.log(Object.values(snapshot.val()));
        this.setState({predictions: Object.values(snapshot.val())});
      });
  }

  render() {
    const months = [];
    const sales = [];

    console.log('sales', this.state.sales_months, this.state.predictions);

    if (this.state.sales_months) {
      for (var i = 0; i < 12; i++) {
        months.push(this.state.sales_months[i].Month);
        const val = parseInt(this.state.sales_months[i].Sales);
        sales.push(val);
      }
    }
    console.log('sales', months, sales, this.state.predictions);

    const data = {
      labels: months,
      datasets: [
        {
          data: sales,
          strokeWidth: 2, // optional
        },
      ],
    };

    return (
      <View>
        <Card>
          <CardItem header bordered>
            <Text>SALES - {`Past year sales predictions(Month vs Sales)`}</Text>
          </CardItem>
        </Card>

        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#d9dddc',
            backgroundGradientFrom: '#d9dddc',
            backgroundGradientTo: '#d9dddc',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />

        <Card>
          <CardItem header bordered>
            <Text>SALES PREDICTIONS</Text>
          </CardItem>
        </Card>

        <FlatList
          data={this.state.predictions}
          renderItem={({item}) => <ListItemPred pred={item} />}
        />
      </View>
    );
  }
}

export default PurchasePred;
