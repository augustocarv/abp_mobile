import React, { memo, useState, useCallback } from 'react';
import { AsyncStorage, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Header from '../../../components/header';
import Background from '../../../components/backgrounds/register';
import Button from '../../../components/button'
import { userService } from '../../../services/userLogin';


const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)

    const onSubmit = useCallback(
        async () => {
            try {
                const result = await userService.login({
                    name,
                    password
                })
                AsyncStorage.setItem('token', result.data.token)
                navigation.navigate('ScheduleScreen')

            } catch (error) {
                alert(error.response.data)
            }
        },
        [],
    )

    return (
        <Background>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '40%' }}>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
                <Header>Bem vindo ao FindBand!</Header>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '25%' }}>
                <TextInput
                    mode="flat"
                    style={{ marginTop: 10, backgroundColor: 'white' }}
                    label="Username"
                    name="name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    mode="flat"
                    label="Senha"
                    secureTextEntry={true}
                    name="password"
                    style={{ marginTop: 10, backgroundColor: 'white' }}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button mode="contained" style={{ marginTop: 60 }} onPress={() => onSubmit()}>
                    Login
                </Button>
            </View>
        </Background>

    )

}


export default memo(LoginScreen);