// TimeCount.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import supabase from '../config/database';

const TimeCount = ({ duration, steps, calories, IdExProcess, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isCompleted, setIsCompleted] = useState(false);

  const saveDataToDB = async () => {
    const { error } = await supabase
      .from('ExProcess')
      .update({ step: steps, calory: Math.ceil(calories) })
      .eq('idExProcess', IdExProcess);
    if (error) {
      console.log(">>>> Error while saving to db ", error);
    }
  };

  const handlePauseResume = () => {
    setIsPlaying((prev) => !prev);
    setIsCompleted(false); // Reset state when starting countdown again
    saveDataToDB();
    if (isPlaying) {
      const elapsedTime = duration - remainingTime;
      console.log(`Elapsed time: ${elapsedTime} seconds`);
    }
  };

  useEffect(() => {
    console.log(`Remaining time: ${remainingTime} seconds`);
  }, [remainingTime]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePauseResume}>
        {isCompleted ? (
          <Image source={require('../assets/img/done.png')} style={styles.image} />
        ) : (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration}
            colors={[]}
            size={60}
            onComplete={() => {
              console.log('Timer finished');
              setIsCompleted(true);
              onComplete(calories); // Call the onComplete callback with calories burned
              return [false, 0];
            }}
          >
            {({ remainingTime: rt }) => {
              useEffect(() => {
                setRemainingTime(rt);
              }, [rt]);
              const percentage = ((duration - rt) / duration) * 100;

              return <Text style={styles.timeText}>{remainingTime}</Text>;
            }}
          </CountdownCircleTimer>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TimeCount;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
  },
});
