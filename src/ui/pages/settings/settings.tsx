import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Settings() {

  return (
        <View style={styles.sectionContainer}>
            <Text>Settings</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
  },
});

export default Settings;
