import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PurchaseForm from './PurchaseForm';
import {purchaseUpdate} from '../actions';
import {Card, CardSection, Button} from './common';

class PurchaseEdit extends Component {
  // componentWillMount() {
  //   _.each(this.props.purchase, (value, prop) => {
  //     this.props.purchaseUpdate({prop, value});
  //   });
  // }

  // onButtonPress() {
  //   const {name, phone} = this.props;
  //   console.log(name, phone);
  // }

  render() {
    return (
      <Card>
        <PurchaseForm />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('item ', state);
  // const {name, phone} = state.purchaseForm;

  // return {name, phone};
};

export default connect(mapStateToProps, {purchaseUpdate})(PurchaseEdit);
