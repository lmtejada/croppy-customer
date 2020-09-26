import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from '../../helpers/colors';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const Button = ({ isDisabled, isPrimary = true, size, title, onPress }) => (
  <TouchableOpacity
    disabled={isDisabled}
    onPress={onPress} 
    style={[
      styles.buttonContainer,
      isDisabled && styles.buttonDisabled,
      isPrimary && styles.buttonPrimary,
      size === "sm" && {
        padding: 8,
        elevation: 6
      },
    ]}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 8,
    elevation: 8,
    marginVertical: 16,
    padding: 16,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primaryColor,
  }, 
  buttonText: {
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  buttonDisabled: {
    backgroundColor: COLORS.gray
  }
});

export default Button;
