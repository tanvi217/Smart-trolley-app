import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {purchasesFetch} from '../actions';
import {connect} from 'react-redux';
import ListItem from './ListItem';

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

  render() {
    console.log('purchases ', this.dataSource);
    return (
      <FlatList
        data={this.dataSource}
        renderItem={({item}) => <ListItem purchase={item} />}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const purchases = _.map(state.purchases, (val, uid) => {
    return {...val, uid};
  });
  console.log('data ', state);
  return {purchases};
};

export default connect(mapStateToProps, {purchasesFetch})(PurchasesList);
