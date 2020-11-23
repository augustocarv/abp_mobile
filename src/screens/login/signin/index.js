import React, { memo, useState, useCallback } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Header from '../../../components/header';
import Background from '../../../components/backgrounds/register';
import Button from '../../../components/button'

const RegisterScreen = ({ navigation }) => {
    const [infoRegister, setInfoRegister] = useState({
        name: null,
        cnpj: null,
        password: null,
    })

    const handleChange = useCallback(
        (event) => {
            setInfoRegister({
                ...infoRegister,
                [event.target.name]: event.target.value
            })
        },
        [],
    )
       console.log(infoRegister) 
    return (
        <Background>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '40%' }}>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
                <Header>Bem vindo ao FindBand!</Header>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '25%' }}>
                <TextInput
                    mode="outlined"
                    style={{ marginTop: 10 }}
                    label="Nome do Estabelecimento"
                    name="name"
                    value={infoRegister.name}
                    onChange={event => handleChange(event)}
                />
                <TextInput
                    mode="outlined"
                    label="CNPJ"
                    name="cnpj"
                    style={{ marginTop: 10 }}
                    value={infoRegister.cnpj}
                    onChange={event => handleChange(event)}
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    name="password"
                    style={{ marginTop: 10 }}
                    value={infoRegister.password}
                    onChange={event => handleChange(event)}
                />
                <Button mode="outlined" style={{ marginTop: 60 }} onPress={() => navigation.navigate('HomeScreen')}>
                    Cadastrar
                </Button>
            </View>
        </Background>
    )
}

export default memo(RegisterScreen);