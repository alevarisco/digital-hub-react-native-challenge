import React  from 'react';
import { withTranslation } from 'react-i18next';
import {
    StyleSheet,
    View,
    TextInput,
  } from 'react-native';

 function Text_Input(props: any) {

    const onChangeText = (val: string) => {
        props.onChangeText(val);
    };

    return (
        <View style={styles.textInputContainer} testID="text-input">
            <TextInput
                value={props.value}
                placeholder={props.title}
                onChangeText={(text: any) => onChangeText(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        fontSize: 14,
        fontFamily: 'Open Sans, sans-serif',
        color: '#545454',
        minHeight: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#545454',
    },
    text: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 16,
        color: '#001b2d',
    },
  });

  export default withTranslation('ns')(Text_Input);
