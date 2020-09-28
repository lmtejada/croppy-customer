import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../helpers/colors';
import Container from '../components/common/Container';
import OrdersList from '../components/OrdersList';

const orders = [
  {
    id: '5',
    date: '2020/07/30',
    products: [{
      id: '2',
      name: 'Product 2',
      amount: 10,
      price: 12000
    }, {
      id: '3',
      name: 'Product 3',
      amount: 10,
      price: 20000
    }],
    status: 'pending',
    total: 32000
  },
  {
    id: '1',
    date: '2020/04/15',
    products: [{
      id: '1',
      name: 'Product 1',
      amount: 10,
      price: 8000
    }, {
      id: '2',
      name: 'Product 2',
      amount: 10,
      price: 12000
    }, {
      id: '3',
      name: 'Product 3',
      amount: 10,
      price: 20000
    }],
    status: 'completed',
    total: 40000
  },
  {
    id: '2',
    date: '2020/05/21',
    products: [{
      id: '1',
      name: 'Product 1',
      amount: 10,
      price: 8000
    }, {
      id: '3',
      name: 'Product 3',
      amount: 10,
      price: 20000
    }],
    status: 'completed',
    total: 28000
  },
  {
    id: '3',
    date: '2020/07/30',
    products: [{
      id: '2',
      name: 'Product 2',
      amount: 10,
      price: 12000
    }, {
      id: '3',
      name: 'Product 3',
      amount: 10,
      price: 20000
    }],
    status: 'canceled',
    total: 32000
  },
  {
    id: '4',
    date: '2020/07/30',
    products: [{
      id: '2',
      name: 'Product 2',
      amount: 10,
      price: 12000
    }, {
      id: '3',
      name: 'Product 3',
      amount: 10,
      price: 20000
    }],
    status: 'completed',
    total: 32000
  }
];

const OrdersScreen = () => {
  return (
    <Container>
      <Text style={{ ...styles.title, marginTop: 0 }}>Historial de pedidos</Text>
      <OrdersList orders={orders} />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.fontColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center'
  }
});

export default OrdersScreen;
