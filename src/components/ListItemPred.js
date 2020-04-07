import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common/CardSection';
import {Actions} from 'react-native-router-flux';

class ListItemPred extends Component {
  render() {
    const {name, prediction} = this.props.pred;

    return (
      <CardSection>
        <Text style={styles.labelStyle}>
          {`Item name: ${name}\nNext month sales prediction: ${prediction}`}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default ListItemPred;
