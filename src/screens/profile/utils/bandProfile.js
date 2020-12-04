import React, { memo, useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button as ButtonPaper } from "react-native-paper";
import Logo from "../../../components/logo/index";
import Background from "../../../components/backgrounds/register";
import Button from "../../../components/button";
import Alert from "../../../components/snackbar";
import AppBar from "../../../components/appbar";
import { bandService } from "../../../services/band";

const BandProfile = ({ navigation }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [representante, setRepresentante] = useState(null);
  const [email, setEmail] = useState(null);
  const [celular, setCelular] = useState(null);
  const [integrantes, setIntegrantes] = useState([]);
  const [estiloMusical, setEstiloMusical] = useState(null);

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
    try {
      const result = await bandService.getProfile();
      setName(result.data.nome);
      setRepresentante(result.data.representante);
      setEmail(result.data.email);
      setCelular(result.data.celular);
      setIntegrantes(result.data.integrantes);
      setEstiloMusical(result.data.estiloMusical.nome);
    } catch (error) {}
  }, []);
  const editMembers = useCallback((value, index) => {
    integrantes[index]["nome"] = value;
    setIntegrantes([...integrantes]);
  }, [integrantes]);

  const addMembers = useCallback(async () => {
    let array = [];
    array.push({
      nome: "",
    });
    setIntegrantes([...integrantes, ...array]);
  }, [integrantes]);

  const removeMember = useCallback(
    async (index) => {
      integrantes.splice(index, 1);
      setIntegrantes([...integrantes]);
    },
    [integrantes]
  );

  const onSubmit = useCallback(async () => {
    try {
      const body = {
        nome: name,
        representante: representante,
        email: email,
        celular: celular,
        integrantes: integrantes,
        estiloMusical: {
          nome: estiloMusical,
        },
      };
      await bandService.postProfile(body);
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
          label="Nome da banda"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          label="Representante"
          value={representante}
          onChangeText={setRepresentante}
        />
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          maxLength={8}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          label="Celular"
          value={celular}
          keyboardType="number-pad"
          onChangeText={setCelular}
        />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 15,
          }}
        >
          <Text style={{ color: "white" }}>Integrantes</Text>
          <Text style={{ color: "white" }} onPress={addMembers}>
            Adicionar
          </Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          {integrantes.map((item, index) => (
            <View key={index} style={{display:'flex', flexDirection:'row'}}>
              <TextInput
                mode="flat"
                key={index}
                label="Nome Integrante"
                style={{ marginTop: 10, backgroundColor: "white", width:'90%' }}
                value={item.nome}
                onChangeText={(value) => editMembers(value, index)}
              />
              <ButtonPaper
                color="white"
                style={{ color: "white", width:"10%", marginTop: 15 }}
                onPress={() => removeMember(index)}
              >
                X
              </ButtonPaper>
            </View>
          ))}
        </View>
        <TextInput
          mode="flat"
          style={{ marginTop: 10, backgroundColor: "white" }}
          label="Estilo Musical"
          value={estiloMusical}
          onChangeText={setEstiloMusical}
        />
        <Button
          mode="outlined"
          style={{ marginTop: 60 }}
          onPress={() => onSubmit()}
        >
          Cadastrar
        </Button>
      </View>
    </Background>
  );
};

export default memo(BandProfile);
