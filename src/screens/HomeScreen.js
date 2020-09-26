import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { COLORS } from '../helpers/colors';
import Container from '../components/common/Container';
import ProductList from '../components/ProductList';
import SearchBar from '../components/common/SearchBar';

const products = [
  {
    id: '1',
    img: require('../../assets/img/producto1.jpg'),
    name: 'Product 1',
    price: 8000
  },
  {
    id: '2',
    img: require('../../assets/img/producto2.jpg'),
    name: 'Product 2',
    price: 12000
  },
  {
    id: '3',
    img: require('../../assets/img/producto3.jpg'),
    name: 'Product 3',
    price: 20000
  }
];

const HomeScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <Container>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={null}
      />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 48 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ ...styles.title, marginTop: 0 }}>Frutas</Text>
        <ProductList products={products} />
        <Text style={styles.title}>Verduras</Text>
        <ProductList products={products} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.fontColor,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8
  }
});

export default HomeScreen;
