import React, {Component} from 'react';
import {View, Image} from 'react-native';
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
  Form,
  Item,
  Label,
  Input,
  Content,
} from 'native-base';

import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Spinner} from './common';
import img from '../../static/logo.jpg';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button block onPress={this.onButtonPress.bind(this)}>
        <Text>Login</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Welcome back!</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input
                placeholder="email@email.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                inlineLabel="true"
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </Item>
            {this.renderError()}

            <Image source={img} style={styles.center} />

            <Button bordered block onPress={this.onButtonPress.bind(this)}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '50%',
  },
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
