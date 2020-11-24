import React, { memo, useState, useCallback } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Logo from '../../../components/logo/index'
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

    const styles = StyleSheet.create({
        text: {
          textAlign: "center",
          fontSize: 26,
          marginTop: 1,
          color: 'white',
          alignSelf:'center',
          fontWeight: 'bold',
          paddingVertical: 14,
        },
      });

       console.log(infoRegister) 
    return (
        <Background>
            <View>
                <BackButton goBack={() => navigation.navigate('HomeScreen')} />
            </View>
            <View>
                <View style={{textAlign:"center", marginTop: 60, alignSelf:"center"}}>
                    <Logo/>
                </View>
                <Text style={styles.text}>
                    Cadastro
                </Text>
            </View>
            <View>
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