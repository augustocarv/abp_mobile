import React, { memo, useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import Background from "../../../components/backgrounds/register";
import Button from "../../../components/button";
import { establishmentService } from "../../../services/establishment";

const EstablishmentProfile = ({ navigation }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [cnpj, setCnpj] = useState(null);
  const [address, setAdress] = useState(null);

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


  const onInit = useCallback(async () => {
    const result = await establishmentService.getProfile();
    setId(result.data.userId);
    setName(result.data.nome);
    setCnpj(result.data.cnpj);
    setAdress(result.data.endereco);
  }, []);
  
  const onSubmit = useCallback(async () => {
    try {
      const body = {
        nome: name,
        cnpj: cnpj,
        endereco: address,
        userId: id,
      }
      await establishmentService.postProfile(body);
    } catch (error) {}
  }, []);

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <Background>
      <Text style={styles.text}>Cadastro</Text>
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
          label="CNPJ"
          name="cnpj"
          maxLength={15}
          style={{ marginTop: 10, backgroundColor: "white" }}
          value={cnpj}
          keyboardType="number-pad"
          onChangeText={setCnpj}
        />
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          label="Endereço"
          name="name"
          value={address}
          onChangeText={setAdress}
        />
        <Button
          mode="outlined"
          style={{ marginTop: 60 }}
          onPress={() => onSubmit()}
        >
          Salvar
        </Button>
      </View>
    </Background>
  );
};

export default memo(EstablishmentProfile);
