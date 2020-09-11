import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import heroImg from '../assets/hero.png';

const Login: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const heroPosition = useSharedValue(-30);

  useEffect(() => {
    heroPosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = withTiming(0, {
          duration: 1000,
          easing: Easing.bounce,
        });
      },
    );
  }, [heroPosition, titlePosition.value]);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: heroPosition.value}],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#312E38" />

      <Animated.Image style={[styles.hero, heroStyle]} source={heroImg} />

      <Animated.Text style={[styles.title, titleStyle]}>
        Hello World
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312E38',
  },
  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    color: '#F4EDE8',
    fontWeight: 'bold',
  },
});

export default Login;
