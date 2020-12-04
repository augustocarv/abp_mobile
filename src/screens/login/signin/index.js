import React, { memo, useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import BackButton from "../../../components/backbutton";
import Logo from "../../../components/logo/index";
import Background from "../../../components/backgrounds/register";
import { RadioButton } from "react-native-paper";
import Button from "../../../components/button";
import { authService } from '../../../services/auth';
import Alert from "../../../components/snackbar";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [cnpj, setCnpj] = useState(null);
  const [role, setRole] = useState(1);
  const [password, setPassword] = useState(null);
  const [alert, setAlert] = useState(false);

  const styles = StyleSheet.create({
    text: {
      textAlign: "center",
      fontSize: 26,
      marginTop: 1,
      color: "white",
      alignSelf: "center",
      fontWeight: "bold",
      paddingVertical: 14,
    },
  });
  const onSubmit = useCallback(async () => {
    try {
      const body = {
        username: name,
        password: password,
        role: role
      }
      const result = await authService.register(body)
      console.log(result)
      navigation.navigate("Login");
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <Background>
      <View>
        <View
          style={{ textAlign: "center", marginTop: 50, alignSelf: "center" }}
        >
          <Logo />
        </View>
        <Text style={styles.text}>Cadastro</Text>
      </View>
      <View>
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          label="Nome do Usuário"
          name="name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          mode="flat"
          label="Senha"
          secureTextEntry={true}
          name="password"
          style={{ marginTop: 10, backgroundColor: "white" }}
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ marginTop: 25 }}>
          <RadioButton.Group
            onValueChange={(value) => setRole(value)}
            style={{ color: 'white' }}
            value={role}
          >
            <RadioButton.Item status={role === 0 ? "checked" : "unchecked"} color="white" labelStyle={{ color: 'white' }} label="Estabelecimento" value={0} />
            <RadioButton.Item status={role === 1 ? "checked" : "unchecked"} color="white" labelStyle={{ color: 'white' }} label="Banda" value={1} />
          </RadioButton.Group>
        </View>
        <Button
          mode="outlined"
          style={{ marginTop: 60 }}
          onPress={() => onSubmit()}
        >
          Cadastrar
        </Button>
      </View>
      <Alert visible={alert} text={"Cadastro realizado com sucesso!"} />
    </Background>
  );
};

export default memo(RegisterScreen);
