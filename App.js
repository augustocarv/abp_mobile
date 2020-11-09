import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default function App() {
  return (
    <Container style={styles.container}>
      <Content style={styles.container}>
        <Text style={{ color: 'white' }}>
          Content
        </Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242424',
  },
});
