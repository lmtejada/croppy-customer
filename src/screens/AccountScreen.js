import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
import Button from '../components/common/Button';
import Container from '../components/common/Container';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <Container>
      <Text>Account Screen</Text>
      <Button
        size="sm"
        title="Cerrar sesión"
        onPress={signout}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
