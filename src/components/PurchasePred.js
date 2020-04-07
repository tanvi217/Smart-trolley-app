import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {CardSection} from './common/CardSection';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import firebase from 'firebase';
import ListItemPred from './ListItemPred';

class PurchasePred extends Component {
  state = {
    sales_months: [],
    predictions: [],
  };

  componentWillMount() {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/Sales`)
      .on('value', (snapshot) => {
        this.sales_months = Object.values(snapshot.val());
      });
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/Predictions`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        this.predictions = Object.values(snapshot.val());
      });
  }

  render() {
    const months = [];
    const sales = [];
    if (this.sales_months) {
      for (var i = 0; i < this.sales_months.length; i++) {
        months.push(this.sales_months[i].month);
        sales.push(this.sales_months[i].sales);
      }
    }
    console.log(months, sales);

    return (
      <View>
        <CardSection>
          <Text style={{fontSize: 20}}>SALES</Text>
        </CardSection>
        <LineChart
          data={{
            labels: months,
            datasets: [
              {
                data: sales,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
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
        <CardSection>
          <Text style={{fontSize: 20}}>SALES PREDICTION</Text>
        </CardSection>
        <FlatList
          data={this.predictions}
          renderItem={({item}) => <ListItemPred pred={item} />}
        />
      </View>
    );
  }
}

export default PurchasePred;
