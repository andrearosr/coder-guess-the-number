import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from './components/Card';
import Colors from './constants/colors';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Comenzar Juego</Text>
      <Card style={styles.inputContainer}>
        <Text>Elija un número</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Limpiar" onPress={() => {}} color={Colors.accent} style={styles.button} />
          <Button title="Confirmar" onPress={() => { }} color={Colors.primary} style={styles.button} />
        </View>
      </Card>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    flex: 1,
  }
});

export default StartGameScreen;