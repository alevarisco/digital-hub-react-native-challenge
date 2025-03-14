import React from 'react';
import { withTranslation } from 'react-i18next';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

 function Content(props: any) {
    return (
        <View style={styles.contentContainerPrincipal}>
            <View style={styles.contentContainer}>
                {props.text && props.text.map((t: any, i: number) => {
                    return (
                        <View style={styles.mapContainer} key={i}>
                            <Text style={styles.title}>{props.t(t.title)}</Text>
                            <Text style={styles.text}>{t.value}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainerPrincipal: {
        width: '100%',
        paddingHorizontal: 20,
    },
    contentContainer: {
        width: '100%',
        borderColor: '#959797',
        borderWidth: 1,
        padding: 20,
        borderRadius: 30,
    },
    mapContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        paddingVertical: 15,
    },
    title: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001b2d',
    },
    text: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        color: '#001b2d',
    },
  });

  export default withTranslation('ns')(Content);
