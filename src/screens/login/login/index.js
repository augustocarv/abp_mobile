import React, { memo } from 'react';
import { Text } from 'react-native';
import BackButton from '../../../components/backbutton';
import Background from '../../../components/backgrounds/home';

const LoginScreen = ({navigation}) => (
    <Background>
        <BackButton goBack={() => navigation.navigate('HomeScreen')} />
        <Text>
            Loginn
        </Text>
    </Background>
);

export default memo(LoginScreen);