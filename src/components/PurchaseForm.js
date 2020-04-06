import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {purchaseUpdate} from '../actions';
import {CardSection, Input} from './common';

class PurchaseForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Name"
            value={this.props.name}
            onChangeText={(value) =>
              this.props.purchaseUpdate({prop: 'name', value})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="Phone"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.purchaseUpdate({prop: 'phone', value})
            }
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone} = state.purchaseForm;

  return {name, phone};
};

export default connect(mapStateToProps, {purchaseUpdate})(PurchaseForm);
