import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  // View,
} from 'react-native';

function Geolocation() {

  return (
        <View style={styles.sectionContainer}>
            <Text>Geolocation</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
});

export default Geolocation;
