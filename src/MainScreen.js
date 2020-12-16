import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function mainScreen() {
  return (
    <View style={styles.container}>
      <Text>Test UI Renderer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
});
