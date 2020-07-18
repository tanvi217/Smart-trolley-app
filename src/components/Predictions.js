import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {CardSection} from './common/CardSection';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import firebase from 'firebase';
import ListItemPred from './ListItemPred';

class Predictions extends Component {
  state = {
    predictions: [],
  };

  componentWillMount() {
    const {currentUser} = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/Predictions`)
      .on('value', (snapshot) => {
        console.log(snapshot.val());
        this.predictions = Object.values(snapshot.val());
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
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

export default Predictions;
