/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ title }) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.text
                }>{title}</Text>
            </View>
        </>
    );
};

Header.defaultProps = {
    title: 'sakshay',
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        width: '100%',
        backgroundColor: 'darkslateblue',
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        padding: 20,
        fontSize: 20
    }});
export default Header;
