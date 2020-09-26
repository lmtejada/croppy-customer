import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS } from '../../helpers/colors';

const NavLink = ({ navigation, routeName, text }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    alignSelf: 'center',
    color: COLORS.blue,
    marginVertical: 8
  }
});

export default withNavigation(NavLink);
