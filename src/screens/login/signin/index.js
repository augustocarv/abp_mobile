import React, { memo, useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Logo from '../../../components/logo/index'
import Header from '../../../components/header';
import Background from '../../../components/backgrounds/register';
import Button from '../../../components/button'
import { userService } from '../../../services/userLogin';
import Alert from '../../../components/snackbar'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [cnpj, setCnpj] = useState(null)
    const [password, setPassword] = useState(null)
    const [alert, setAlert] = useState(false)

    const styles = StyleSheet.create({
        text: {
            textAlign: "center",
            fontSize: 26,
            marginTop: 1,
            color: 'white',
            alignSelf: 'center',
            fontWeight: 'bold',
            paddingVertical: 14,
        },
    });
    const onSubmit = useCallback(
        async () => {
            try {
                // await userService.register({
                //     name,
                //     cnpj,
                //     password
                // })
                setAlert(true)

                navigation.navigate('LoginScreen')


            } catch (error) {
                alert(error.response.data)
            }
        },
        [],
    )

    return (
        <Background>
            <View>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
            </View>
            <View>
                <View style={{ textAlign: "center", marginTop: 60, alignSelf: "center" }}>
                    <Logo />
                </View>
                <Text style={styles.text}>
                    Cadastro
                </Text>
            </View>
            <View>
                <TextInput
                    mode="flat"
                    style={{ marginTop: 10, backgroundColor: 'white' }}
                    label="Nome do Usuário"
                    name="name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    mode="flat"
                    label="CNPJ"
                    name="cnpj"
                    maxLength={15}
                    style={{ marginTop: 10, backgroundColor: 'white' }}
                    value={cnpj}
                    keyboardType="number-pad"
                    onChangeText={setCnpj}
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
                <Button mode="outlined" style={{ marginTop: 60 }} onPress={() => onSubmit()}>
                    Cadastrar
                </Button>
            </View>
            <Alert visible={alert} text={'Cadastro realizado com sucesso!'} />
        </Background>
    )
}

export default memo(RegisterScreen);