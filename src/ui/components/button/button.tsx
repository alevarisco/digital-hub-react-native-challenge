import React from 'react';
import { withTranslation } from 'react-i18next';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
  } from 'react-native';

 function Button(props: any) {
    return (
        <TouchableOpacity
            testID="Button"
            disabled={props.disabled}
            style={
                props.disabled ?
                styles.buttonDisabled
                :
                props.style === 'default' ?
                styles.buttonDefault
                :
                props.style === 'noline' ?
                styles.buttonNoline
                :
                styles.buttonOutline
            }
            onPress={props.onPress}
        >
            <Text
                style={
                    props.style === 'default' ?
                    styles.titleDefault
                    :
                    styles.titleOutline
                }
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonDisabled: {
        backgroundColor: '#d6d6d6',
        height: 35,
        borderRadius: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDefault: {
        backgroundColor: '#3e81ff',
        height: 35,
        borderRadius: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#00000',
        height: 35,
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderColor: '#3e81ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNoline: {
        backgroundColor: '#00000',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleDefault: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    titleOutline: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0b577b',
    },
  });

  export default withTranslation('ns')(Button);
