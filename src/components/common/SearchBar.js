import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../helpers/colors';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Buscar"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    marginBottom: 16
  },
  icon: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 35,
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;