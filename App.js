import React, {useState} from 'react';
import {
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
import GameOver from './src/components/GameOver.js';
const backgroundImage = require('./src/assets/bg.png');


function App() {
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [gameEngine, setGameEngine] = useState(null);

  const onEvent = e =>  {
    if (e.type === 'game-over') {
      setRunning(false)
    } else if(e.type === 'score'){
      setScore(score+1)
    }
   };
   const  restart = () => {
     setRunning(true)
     setScore(0)
     gameEngine.swap(Entities());
  };
  return (
    <View style={styles.container}>
      <FastImage style={styles.imageBackground} source={backgroundImage} />
      <GameEngine
        ref={ref => {setGameEngine(ref)}}
        style={styles.gameContainer}
        running={running}
        entities={Entities()}
        systems={Systems}
        onEvent={onEvent}>
          <StatusBar hidden={true} />
      </GameEngine>
      {running ? (
        <Text style={styles.score}>{score}</Text>
      ) : (
        <GameOver score={score} restart={restart} />
      )}
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
  score:{
    fontFamily: "Plaguard",
    color: '#FFD700',
    fontSize: 28
  }
});

export default App;
