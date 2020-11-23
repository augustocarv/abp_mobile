import React, { memo } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';


const BackgroundRegister = ({ children }) => (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
  },
});

export default memo(BackgroundRegister);