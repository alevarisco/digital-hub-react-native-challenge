import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


export default function Title(props: any) {
    return (
        <View style={styles.titleContainer} testID="title">
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
        fontSize: SCREEN_WIDTH < 400 ? 18 : 20,
        fontWeight: 'bold',
        color: '#001b2d',
    },
  });
