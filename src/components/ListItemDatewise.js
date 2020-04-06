import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CardSection} from './common/CardSection';

class ListItemDatewise extends Component {
  render() {
    const {name, price, expdate, mfdate, weight} = this.props.purchase;

    return (
      <CardSection>
        <Text style={styles.labelStyle}>
          {`Item name: ${name}\nItem Price: ${price}\nItem weight: ${weight}\nManufacturing Date: ${mfdate}\nExpiry Date: ${expdate}`}
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

export default ListItemDatewise;
