import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../helpers/colors';

const CardSection = ({ children, isLast, isRow }) => {
  return (
    <View style={[
      styles.cardSection,
      isLast && { borderBottomWidth: 0 },
      isRow && { flexDirection: 'row' }
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSection: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    padding: 8,
    position: 'relative'
  }
});

export default CardSection;