import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../logo/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    textAlign: "center",
    width: 220,
    height: 60,
  },
});

export default memo(Logo);