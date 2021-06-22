import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar Juego</Text>
      <View style={styles.inputContainer}>
        <Text>Elija un número</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" onPress={() => {}} />
          <Button title="Confirmar" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;