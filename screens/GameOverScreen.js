import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require('../assets/images/GameOver.png')} />
      <Card style={styles.resultContainer}>
        <Text>Intentos: {rounds}</Text>
        <Text>El número era: {choice}</Text>
      </Card>
      <Button title="NUEVO JUEGO" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    marginBottom: 30,
    padding: 20,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
  },
});

export default GameOverScreen;