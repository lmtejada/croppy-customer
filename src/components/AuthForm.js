import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../helpers/colors';
import Button from './common/Button';
import Input from './common/Input';

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  return (
    <>
      <Text style={styles.header}>{headerText}</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
      />
      {/* {
        errorMessage
          ? <Text style={styles.errorMessage}>{errorMessage}</Text>
          : null
      } */}
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: COLORS.red,
    fontSize: 16,
    marginVertical: 16
  },
  header: {
    alignSelf: 'center',
    color: COLORS.fontColor,
    fontSize: 32,
    marginVertical: 16
  }
});

export default AuthForm;
