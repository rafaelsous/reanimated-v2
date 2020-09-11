import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Animated, {
  event,
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });
  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: 300}}>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{
            uri: 'https://github.com/rafaelsous.png',
          }}
        />

        <Text style={styles.name}>Rafael Sousa</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6C63FF',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFF',
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;
