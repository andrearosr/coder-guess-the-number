import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumer, setSelectedNumber] = useState('');

  const handleInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  }

  const handleResetInput = () => {
    setEnteredValue('');
    setConfirmed(false);
  }

  const handleConfirmInput = () => {
    const chooseNumber = parseInt(enteredValue);

    if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(chooseNumber);
    setEnteredValue('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un número</Text>
          <Input
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleInputNumber}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button title="Limpiar" onPress={handleResetInput} color={Colors.accent} style={styles.button} />
            <Button title="Confirmar" onPress={handleConfirmInput} color={Colors.primary} style={styles.button} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback> 
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