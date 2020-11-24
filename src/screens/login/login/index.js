import React, { memo, useState } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { TextInput } from 'react-native-paper';
import BackButton from '../../../components/backbutton';
import Header from '../../../components/header';
import Logo from '../../../components/logo/index'
import Background from '../../../components/backgrounds/register';
import Button from '../../../components/button'


const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)

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
                    Login
                </Text>
            </View>
            <View>
                <TextInput
                    mode="outlined"
                    style={{ marginTop: 10, backgroundColor: 'white' }}
                    label="Username"
                    type="outlined"
                    selectionColor="white"
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
                <Button mode="contained" style={{ marginTop: 60 }} onPress={() => navigation.navigate('HomeScreen')}>
                    Login
                </Button>
            </View>
        </Background>

    )

}


export default memo(LoginScreen);