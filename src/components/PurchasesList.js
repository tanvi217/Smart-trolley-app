import _ from 'lodash';
import React, {Component} from 'react';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';

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

  onButtonPress() {
    this.props.loggedOut();
  }

  onButtonPressPred() {
    Actions.purchasePred();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Purchases</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <View style={{flex: 1}}>
          <FlatList
            data={this.dataSource}
            renderItem={({item}) => <ListItem purchase={item} />}
          />

          <Button onPress={this.onButtonPress.bind(this)}>
            <Text>Logout</Text>
          </Button>
          {this.currentUser.uid === 'WqcFBidhthQdWTSXzMVVyEVPu6D2' && (
            <Button onPress={this.onButtonPressPred.bind(this)}>
              <Text>PREDICTIONS</Text>
            </Button>
          )}
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
