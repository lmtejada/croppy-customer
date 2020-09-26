import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Container from '../components/common/Container';
import NavLink from '../components/common/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <Container isFlex={true}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Iniciar sesión"
        errorMessage={state.errorMessage}
        submitButtonText="Ingresar"
        onSubmit={signin}
      />
      <NavLink
        text="¿Aún no tienes una cuenta? Regístrate!"
        routeName="Signup"
      />
    </Container>
  );
};

export default SigninScreen;
