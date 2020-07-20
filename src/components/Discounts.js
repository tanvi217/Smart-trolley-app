import _ from 'lodash';
import React, {Component} from 'react';
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

import offer from '../../static/offer.jpg';
import coupon from '../../static/coupon.jpg';

class Discounts extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Coupon code - HOLA123</Text>
                  <Text note>Buy get 1 free on shampoo!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={coupon}
                  style={{height: 100, width: 100, flex: 1}}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Avail the coupon now!</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Discount</Text>
                  <Text note>500 off on purchases above 5000!</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={offer}
                  style={{height: 100, width: 100, flex: 1}}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text>Avail the discount now!</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Discounts;
