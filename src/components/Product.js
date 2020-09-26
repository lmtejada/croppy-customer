import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../helpers/colors';
import { currencyFormat } from '../helpers/utils';

const Product = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.img} />
      <View style={styles.details}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.price}>{currencyFormat(data.price)}</Text>
        </View>
        <View style={styles.iconParent}>
          <FontAwesome
            color={COLORS.primaryColor}
            name="plus-square"
            size={30}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8
  },
  details: {
    flexDirection: 'row',
    marginTop: 8
  },
  image: {
    height: 200,
    width: 200
  },
  iconParent: {
    alignItems: 'flex-end',
    flex: 1,
    marginVertical: 8
  },
  name: {
    color: COLORS.fontColor,
    fontSize: 16,
    fontWeight: 'bold'
  },
  price: {
    color: COLORS.fontColor,
    fontSize: 16
  }
});

export default Product;