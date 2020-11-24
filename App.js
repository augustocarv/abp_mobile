import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes/routes';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D42AFF',
    accent: '#f1c40f',
  },
};

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </PaperProvider>
  );
}