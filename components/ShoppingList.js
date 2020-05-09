/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './Header';
const ShoppingList = ({ title }) => {
	return (
		<>
			<View>
				<Image
					style={styles.image}
					source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }}
				/>
				<Text>{title}</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 70,
		width: 70,
		borderRadius: 100 / 2,
	},
});
export default ShoppingList;
