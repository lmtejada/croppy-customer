import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { COLORS } from '../../helpers/colors';

const Input = ({ label, placeholder, value, onChangeText }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    fontSize: 16,
    padding: 8
  },
  label: {
    color: COLORS.fontColor,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16
  }
});

export default Input;
