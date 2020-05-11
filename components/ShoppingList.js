import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ShoppingList = ({items, deleteItem, addItem}) => {
  const [itemName, setItemName] = useState('');
  return (
    <>
      <View>
        <TextInput
          value={itemName}
          onChangeText={(text) => {
            setItemName((prev) => text);
          }}
          style={styles.input}
          placeholder={'Add item'}
        />
        <Button
          onPress={() => {
            addItem(itemName);
            setItemName((prev) => '');
          }}
          title={'Add item'}
        />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text>{item.itemName}</Text>
                <Icon
                  onPress={(ev) => deleteItem(item.id, ev)}
                  style={styles.icon}
                  name="remove"
                  size={20}
                  color="firebrick"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 50,
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 'auto',
  },
  input: {
    padding: 10,
    fontSize: 20,
  },
});
export default ShoppingList;
