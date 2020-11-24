import React, { memo, useState, useCallback } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Header from '../../../components/header';
import Background from '../../../components/backgrounds/register';
import Button from '../../../components/button'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [cnpj, setCnpj] = useState(null)
    const [password, setPassword] = useState(null)
    return (
        <Background>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '40%' }}>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
                <Header>Bem vindo ao FindBand!</Header>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '25%' }}>
                <TextInput
                    mode="flat"
                    style={{ marginTop: 10}}
                    label="Nome do Estabelecimento"
                    name="name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    mode="flat"
                    label="CNPJ"
                    name="cnpj"
                    style={{ marginTop: 10}}
                    value={cnpj}
                    keyboardType="number-pad"
                    onChangeText={setCnpj}
                    // render={props =>
                    //     <TextInputMask
                    //     {...props}
                    //     mask="+[00] [000] [000] [000]"
                    //   />
                    // }
                />
                <TextInput
                    mode="flat"
                    label="Senha"
                    secureTextEntry={true}
                    name="password"
                    style={{ marginTop: 10 }}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button mode="outlined" style={{ marginTop: 60 }} onPress={() => navigation.navigate('HomeScreen')}>
                    Cadastrar
                </Button>
            </View>
        </Background>
    )
}

export default memo(RegisterScreen);