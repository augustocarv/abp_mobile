import React, { memo } from 'react';
import { Text } from 'react-native';
import BackButton from '../../../components/backbutton';
import Background from '../../../components/container';

const RegisterScreen = ({ navigation }) => (
    <Background>
        <BackButton goBack={() => navigation.navigate('HomeScreen')} />
        <Text>
            Register
        </Text>
    </Background>
);

export default memo(RegisterScreen);