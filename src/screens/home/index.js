import React, { memo } from 'react';
import Background from '../../components/container/index';
// import Logo from '../components/Logo';
import Header from '../../components/header/index';
import Button from '../../components/button/index';

const HomeScreen = ({navigation}) => (
  <Background>
    {/* <Logo /> */}
    <Header>Bem vindo ao FindBand!</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('SignUpScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);