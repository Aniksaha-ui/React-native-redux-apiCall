import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { NativeRouter, Route, Link } from "react-router-native";
import Category from './component/Category/category';
import Product from './component/Product/product';

import store from './src/store';

export default function App() {
  return (
    <Provider store={store} >
    <NativeRouter>
    <View style={styles.container}>
      
      <Route exact path='/' component={Category} />
     
    </View>
    </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:80,
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
