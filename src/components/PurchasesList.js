import _ from 'lodash';
import React, {Component} from 'react';
import {loggedOut} from '../actions';
import {FlatList, View} from 'react-native';
import {purchasesFetch} from '../actions';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {CardSection, Button} from './common';

class PurchasesList extends Component {
  componentWillMount() {
    this.props.purchasesFetch();

    this.createDataSource(this.props);
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

  render() {
    // console.log('purchases_ds ', this.dataSource);
    return (
      <View>
        <FlatList
          data={this.dataSource}
          renderItem={({item}) => <ListItem purchase={item} />}
        />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Logout</Button>
        </CardSection>
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
