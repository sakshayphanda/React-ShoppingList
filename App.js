import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
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
    if (!itemName) {
      Alert.alert('Error', 'Item name can not be empty', {text: 'OK'});
      return;
    }
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
