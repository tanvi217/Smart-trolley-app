import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {CardSection} from './common/CardSection';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import firebase from 'firebase';
import ListItemPred from './ListItemPred';

const screenWidth = Dimensions.get('window').width;

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
        this.predictions = Object.values(snapshot.val());
      });
  }

  render() {
    const months = [];
    const sales = [];
    if (this.sales_months) {
      for (var i = 0; i < 12; i++) {
        months.push(this.sales_months[i].Month);
        const val = parseInt(this.sales_months[i].Sales);
        sales.push(val);
      }
    }
    console.log('sales', months, sales);

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
        <CardSection>
          <Text style={{fontSize: 20}}>SALES</Text>
          <Text>{`\n\nPast year sales(Month vs Sales)`}</Text>
        </CardSection>
        <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
