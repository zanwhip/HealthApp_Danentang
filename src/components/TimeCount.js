import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const TimeCount = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);


  const handlePauseResume = () => {
    setIsPlaying(prev => !prev);
    setIsCompleted(false); // Đặt lại trạng thái khi bắt đầu countdown lại
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
