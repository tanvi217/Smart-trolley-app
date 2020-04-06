import React, {Component} from 'react';
import {connect} from 'react-redux';
import {purchaseUpdate, purchaseCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import PurchaseForm from './PurchaseForm';

class PurchaseCreate extends Component {
  onButtonPress() {
    const {name, phone} = this.props;

    this.props.purchaseCreate({name, phone});
  }

  render() {
    return (
      <Card>
        <PurchaseForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.purchaseForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {purchaseUpdate, purchaseCreate})(
  PurchaseCreate,
);
