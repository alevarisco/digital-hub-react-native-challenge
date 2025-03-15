import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

function Home() {

  return (
    <View style={styles.sectionContainer}>
        <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
    paddingTop: 50,
  },
});

export default Home;
