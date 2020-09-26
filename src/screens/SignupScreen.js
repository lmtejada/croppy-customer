import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Container from '../components/common/Container';
import NavLink from '../components/common/NavLink';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <Container isFlex={true}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Bienvenido!"
        errorMessage={state.errorMessage}
        submitButtonText="Registrarse"
        onSubmit={signup}
      />
      <NavLink
        text="¿Ya tienes una cuenta? Ingresa aquí!"
        routeName="Signin"
      />
    </Container>
  );
};

export default SignupScreen;
