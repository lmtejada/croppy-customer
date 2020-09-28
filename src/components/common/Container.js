import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet } from 'react-native';

const Container = ({ children, isFlex }) => {
  return (
    <SafeAreaView
      forceInset={{ top: 'always' }}
      style={[
        styles.container,
        isFlex && { flex: 1 }
        ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16
  }
});

export default Container;
