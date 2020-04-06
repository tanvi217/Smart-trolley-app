import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common/CardSection';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    console.log('ind item', this.props.purchase);
    Actions.purchaseDetail({purchase: this.props.purchase});
  }

  render() {
    const {uid} = this.props.purchase;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>Purchase Date: </Text>
            <Text style={styles.titleStyle}>{uid}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
