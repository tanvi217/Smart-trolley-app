import _ from 'lodash';
import React, {Component} from 'react';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';

import {loggedOut, purchasesFetch} from '../actions';
import ListItem from './ListItem';
import {CardSection, Button} from './common';

class PurchasesList extends Component {
  componentWillMount() {
    this.props.purchasesFetch();

    this.createDataSource(this.props);
    const {currentUser} = firebase.auth();
    this.currentUser = currentUser;
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({purchases}) {
    this.dataSource = purchases;
  }

  onButtonPress() {
    this.props.loggedOut();
  }

  onButtonPressPred() {
    Actions.purchasePred();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.dataSource}
          renderItem={({item}) => <ListItem purchase={item} />}
        />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Logout</Button>
        </CardSection>
        {this.currentUser.uid === 'WqcFBidhthQdWTSXzMVVyEVPu6D2' && (
          <CardSection>
            <Button onPress={this.onButtonPressPred.bind(this)}>
              PREDICTIONS
            </Button>
          </CardSection>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state);
  const purchases = _.map(state.purchases, (val, uid) => {
    return {...val, uid};
  });
  return {purchases};
};

export default connect(mapStateToProps, {purchasesFetch, loggedOut})(
  PurchasesList,
);
