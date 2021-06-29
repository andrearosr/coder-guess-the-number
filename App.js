import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const content = userNumber
    ? <GameScreen onEndGame={setUserNumber} userOption={userNumber} />
    : <StartGameScreen onStartGame={setUserNumber} onGameOver={() => {}} />

  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
