import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#cbd4c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#50514f',
    fontSize: 22,
  },
});

export default Header;