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
            {props.button ? props.button : null}
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'space-between',
        margin: 20,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#001b2d',
    },
  });
