import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {width, height} from './src/utils/styleSheet';
import FastImage from 'react-native-fast-image'
import { GameEngine } from 'react-native-game-engine';
import Entities from './src/entities';
import Systems from './src/systems';
const backgroundImage = require('./src/assets/bg.png');


function App() {
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [gameEngine, setGameEngine] = useState(null);

  return (
    <View style={styles.container}>
      <FastImage style={styles.imageBackground} source={backgroundImage} />
      <GameEngine
        ref={ref => {setGameEngine(ref)}}
        style={styles.gameContainer}
        running={running}
        entities={Entities()}
        systems={Systems}>
          <StatusBar hidden={true} />
      </GameEngine>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageBackground: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
