import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import ShoppingList from './components/ShoppingList';
import Header from './components/Header';
const title = 'Shopping List';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.root}>
        <Header title={title} />
        {/* <ShoppingList title={title} /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
