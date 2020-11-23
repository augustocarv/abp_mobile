import React, { memo } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const BackgroundRegister = ({ children }) => (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.select({
        ios: 'padding',
        android: null,
    })}>
      {children}
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
});

export default memo(BackgroundRegister);