import _ from 'lodash';
import React, {Component} from 'react';
import {loggedOut} from '../actions';
import {FlatList, View} from 'react-native';
import {purchasesFetch} from '../actions';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {CardSection, Button} from './common';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

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
    console.log('purchases_ds ', this.currentUser.uid);
    return (
      <View>
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
  const purchases = _.map(state.purchases, (val, uid) => {
    return {...val, uid};
  });
  // console.log('data_state ', state);
  return {purchases};
};

export default connect(mapStateToProps, {purchasesFetch, loggedOut})(
  PurchasesList,
);
