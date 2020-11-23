import React, { memo, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Header from '../../../components/header';
import Background from '../../../components/backgrounds/register';

const RegisterScreen = ({ navigation }) => {
    const [infoRegister, setInfoRegister] = useState({
        name: null,
        cnpj: null,
        password: null,
    })
    return (
        <Background>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '40%' }}>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
                <Header>Bem vindo ao FindBand!</Header>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '20%' }}>
                <TextInput
                    mode="outlined"
                    style={{ marginTop: 10 }}
                    label="Nome do Estabelecimento"
                    value={infoRegister.name}
                />
                <TextInput
                    mode="outlined"
                    label="CNPJ"
                    style={{ marginTop: 10 }}
                    value={infoRegister.cnpj}
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    style={{ marginTop: 10 }}
                    value={infoRegister.password}
                />
            </View>
        </Background>
    )
}

export default memo(RegisterScreen);