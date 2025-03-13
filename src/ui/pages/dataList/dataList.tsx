import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function DataList() {

  return (
        <View style={styles.sectionContainer}>
            <Text>DataList</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
});

export default DataList;
