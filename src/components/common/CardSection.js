import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../helpers/colors';

const CardSection = ({ children }) => {
  return (
    <View style={styles.cardSection}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSection: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 8,
    position: 'relative'
  }
});

export default CardSection;