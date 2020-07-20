import _ from 'lodash';
import React, {Component} from 'react';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
} from 'native-base';

import {loggedOut} from '../actions';
import purchaseHistory from '../../static/purchaseHistory.png';
import discount from '../../static/discount.jpg';
import prediction from '../../static/prediction.jpg';

class MainScreen extends Component {
  componentWillMount() {
    const {currentUser} = firebase.auth();
    this.currentUser = currentUser;
  }

  onButtonPress() {
    loggedOut();
  }

  onButtonPressPurchases() {
    Actions.purchasesList();
  }

  onButtonPressPred() {
    Actions.purchasePred();
  }

  onButtonPressDiscounts() {
    Actions.offers();
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Purchases</Text>
                  <Text note>Your shopping history</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={purchaseHistory}
                  style={{height: 100, width: 100, flex: 1}}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  transparent
                  textStyle={{color: '#87838B'}}
                  onPress={this.onButtonPressPurchases.bind(this)}>
                  <Text>Check your purchases!</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          {this.currentUser.uid === 'tv7NYCCLWahX4ojmjwXhk8ceIKI2' && (
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Predictions</Text>
                    <Text note>Predicted sales</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image
                    source={prediction}
                    style={{height: 100, width: 100, flex: 1}}
                  />
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button
                    transparent
                    textStyle={{color: '#87838B'}}
                    onPress={this.onButtonPressPred.bind(this)}>
                    <Text>Check predicted sales!</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          )}

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Offers</Text>
                  <Text note>Discounts & Exciting coupons</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={discount}
                  style={{height: 100, width: 100, flex: 1}}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  transparent
                  textStyle={{color: '#87838B'}}
                  onPress={this.onButtonPressDiscounts.bind(this)}>
                  <Text>Check out discounts!</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Button
                transparent
                textStyle={{color: '#87838B'}}
                onPress={this.onButtonPress.bind(this)}>
                <Text>LOGOUT!</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default MainScreen;
