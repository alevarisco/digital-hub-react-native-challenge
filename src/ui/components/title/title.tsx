import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default function Title(props: any) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        justifyContent: 'center',
        margin: 20,
    },
    title: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001b2d',
    },
  });
