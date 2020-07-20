import _ from 'lodash';
import React, {Component} from 'react';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Container} from 'native-base';

import {loggedOut, purchasesFetch} from '../actions';
import ListItem from './ListItem';

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

  onButtonPressPred() {
    Actions.purchasePred();
  }

  render() {
    return (
      <Container>
        <View style={{flex: 1}}>
          <FlatList
            data={this.dataSource}
            renderItem={({item}) => <ListItem purchase={item} />}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const purchases = _.map(state.purchases, (val, uid) => {
    return {...val, uid};
  });
  return {purchases};
};

export default connect(mapStateToProps, {purchasesFetch, loggedOut})(
  PurchasesList,
);
