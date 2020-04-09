import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {CardSection} from './common/CardSection';
import {LineChart} from 'react-native-chart-kit';
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
        sales.push(Math.floor(this.sales_months[i].sales));
      }
    }
    console.log('sales', months, sales);

    const data = {
      labels: months,
      datasets: [
        {
          data: sales,
          // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
          width={Dimensions.get('window').width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
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
