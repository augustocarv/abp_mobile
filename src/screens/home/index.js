import React, { memo } from 'react';
import Background from '../../components/backgrounds/home/index';
import Logo from '../../components/logo/index';
import Header from '../../components/header/index';
import Button from '../../components/button/index';

const HomeScreen = ({navigation}) => (
  <Background>
    <Logo />
    <Header>Bem vindo ao FindBand!</Header>

    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('SignUpScreen')}
    >
      Cadastro
    </Button>
  </Background>
);

export default memo(HomeScreen);