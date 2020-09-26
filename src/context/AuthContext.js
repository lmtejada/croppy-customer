import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import createDataContext from './createDataContext';
// import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'signout':
      return { errorMessage: '', token: null };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => { 
  dispatch({ type: 'clear_error_message' });
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('mainFlow');
  } else {
    navigate('loginFlow');
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    // const response = await trackerApi.post('/signup', { email, password });
    const response = {
      data: {
        token: 'test'
      }
    };
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token
    });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Se ha presentado un error en el registro'
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    // const response = await trackerApi.post('/signin', { email, password });
    const response = {
      data: {
        token: 'test'
      }
    };
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({
      type: 'signin',
      payload: response.data.token
    });
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Se ha presentado un error al ingresar'
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {
    clearErrorMessage,
    signin,
    signout,
    signup,
    tryLocalSignIn
  },
  {
    token: null,
    errorMessage: ''
  }
);
