import React, { memo } from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

const BackgroundRegister = ({ children }) => (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior={Platform.select({
        ios: 'padding',
        android: null,
    })}>
        {children}
    </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
});

export default memo(BackgroundRegister);