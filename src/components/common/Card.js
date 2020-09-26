import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../helpers/colors';

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 0,
    borderColor: COLORS.lightGray,
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  }
});

export default Card;