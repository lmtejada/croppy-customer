import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { COLORS } from '../helpers/colors';
import Product from './Product';

const ProductsList = ({ navigation, products }) => {
  if (!products.length) {
    return null;
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 16 }}
      data={products}
      keyExtractor={product => product.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={
              () => navigation.navigate('ProductDetail', { id: item.id })
            }
          >
            <Product data={item} />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
    borderColor: COLORS.lightGray,
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    padding: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  }
});

export default withNavigation(ProductsList);