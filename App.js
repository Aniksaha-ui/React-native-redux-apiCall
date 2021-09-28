import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font'
import Navigator from './routes/drawer'
import { NativeRouter, Route, Link } from "react-router-native";
import Category from './component/Category/category';


const getFonts =()=>Font.loadAsync({
  'Nunito-Black':require('./assets/Nunito/Nunito-Black.ttf'),
  'Nunito-Bold':require('./assets/Nunito/Nunito-Bold.ttf')
})

import store from './src/store';
import { loadAsync } from 'expo-font';

export default function App() {

 
  return (
    <Provider store={store} >
    {/* <NativeRouter> */}
    <View style={styles.container}>
      
      <Navigator />
     
    </View>
    {/* </NativeRouter> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor:'#fff',
   
    flex: 1,
  },
});
