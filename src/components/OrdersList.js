import React from 'react';
import { FlatList } from 'react-native';
import Order from './Order';

const OrdersList = ({ orders }) => {
  if (!orders.length) {
    return null;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 8 }}
      data={orders}
      keyExtractor={order => order.id}
      renderItem={({ item }) => {
        return (
          <Order data={item} />
        );
      }}
    />
  );
}

export default OrdersList;