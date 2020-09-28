import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../helpers/colors';
import CardSection from './common/CardSection';
import { currencyFormat } from '../helpers/utils';

const Product = ({ data }) => {
  const
    getStatusData = status => {
      switch (status) {
        case 'canceled':
          return { color: 'red', icon: 'times-circle-o', label: 'Cancelado' };

        case 'completed':
          return { color: 'green', icon: 'check-circle-o', label: 'Finalizado' };

        case 'pending':
          return { color: 'orange', icon: 'clock-o', label: 'Pendiente' };
      
        default:
          return {};
      }
    },
    renderStatus = status => {
      const { color, icon, label } = getStatusData(status);

      return (
        <View style={{ ...styles.alignLeft, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              ...styles.statusText,
              color: COLORS[color],
            }}>{label}</Text>
            <FontAwesome
              color={COLORS[color]}
              name={icon}
              size={20}
            />
          </View>
        </View>
      );
    },
    renderProductDetails = products => (
      products.map(item => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          <View style={styles.alignLeft}>
            <Text style={styles.text}>{item.amount}</Text>
          </View>
        </View>
      ))
    );

  return (
    <View style={styles.container}>
      <CardSection isRow={true}>
        <View>
          <Text style={styles.label}>Factura #{data.id}</Text>
          <Text style={styles.text}>{new Date(data.date).toLocaleDateString()}</Text>
        </View>
        {renderStatus(data.status)}
      </CardSection>
      <CardSection>
        {renderProductDetails(data.products)}
      </CardSection>
      <CardSection isRow={true} isLast={true}>
        <Text style={styles.label}>Total: </Text>
        <Text style={styles.text}>{currencyFormat(data.total)}</Text>
      </CardSection>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
    borderColor: COLORS.lightGray,
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginBottom: 8,
    padding: 8,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  item: {
    flexDirection: 'row',
    marginVertical: 4
  },
  label: {
    color: COLORS.fontColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4
  },
  alignLeft: {
    alignItems: 'flex-end',
    flex: 1
  },
  statusText: {
    marginRight: 4
  },
  text: {
    color: COLORS.fontColor,
    fontSize: 16,
  }
});

export default Product;