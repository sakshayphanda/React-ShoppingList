import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';
import ShoppingList from './components/ShoppingList';
import Header from './components/Header';

const title = 'Shopping List';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: 'Vegetables',
    },
    {
      id: 2,
      itemName: 'Milk',
    },
    {
      id: 3,
      itemName: 'Bread',
    },
    {
      id: 4,
      itemName: 'Medicines',
    },
  ]);

  const deleteItem = (id, ev) => {
    setItems((prevItems) => {
      console.log(id);
      //Alert.alert('success', 'delete', {text: 'OK'});

      const newItems = prevItems
        .filter((item) => item.id !== id)
        .map((item, index) => {
          const obj = {
            id: index + 1,
            itemName: item.itemName,
          };
          return obj;
        });
      return newItems;
    });
  };

  const addItem = (itemName) => {
    setItems((prevItems) => {
      const obj = {
        id: prevItems.length + 1,
        itemName: itemName,
      };
      const newItems = [...prevItems, obj];
      console.log(newItems);

      return newItems;
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.root}>
        <Header title={title} />
        <ShoppingList items={items} deleteItem={deleteItem} addItem={addItem} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
  },
});

export default App;
