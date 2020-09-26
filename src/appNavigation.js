import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

import AccountScreen from './screens/AccountScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ResolveAuthScreen from './screens/ResolveAuthScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

const headerOptions = {
  defaultNavigationOptions: {
    title: 'Croppy',
    headerStyle: {
      backgroundColor: '#009688',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
  }
};

const homeFlow = createStackNavigator({
  Home: HomeScreen,
  ProductDetail: {
    screen: ProductDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Regresar',
      headerTitleStyle: {
        textAlign: 'left'
      }
    })
  },
  Cart: CartScreen,
  Payment: PaymentScreen
}, headerOptions);

homeFlow.navigationOptions = {
  title: 'Inicio',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome
      name="home"
      size={20}
      color={tintColor}
    />
  )
};

const ordersFlow = createStackNavigator({
  Orders: OrdersScreen
}, headerOptions);

ordersFlow.navigationOptions = {
  title: 'Tus órdenes',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome
      name="th-list"
      size={20}
      color={tintColor}
    />
  )
};

const accountFlow = createStackNavigator({
  Account: AccountScreen
}, headerOptions);

accountFlow.navigationOptions = {
  title: 'Cuenta',
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome
      name="gear"
      size={20}
      color={tintColor}
    />
  )
};

const tabConfig = {
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#009688',
    tabStyle: {
      paddingVertical: 8
    }
  }
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Signin: {
      screen: SigninScreen,
      navigationOptions: {
        headerShown: false
      }
    }
  }),
  mainFlow: createBottomTabNavigator({
    homeFlow,
    ordersFlow,
    accountFlow
  }, tabConfig)
});

export default switchNavigator;