import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';
import { View, ScrollView, StatusBar } from 'react-native';
import './config/ReactotronConfig';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
      <StatusBar backgroundColor="#FF9982" barStyle="light-content" />
      <Header></Header>
      <ScrollView>
        <SubHeader></SubHeader>
        <ProductList></ProductList>
      </ScrollView>
      <Tabs></Tabs>
    </View>
  )
}

export default console.tron.overlay(App);
