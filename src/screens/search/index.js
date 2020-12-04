import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card, Searchbar, Button, TextInput } from "react-native-paper";
import AppBar from "../../components/appbar";
import { bandService } from "../../services/band";

const FindScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [hour, setHour] = useState(null)
  const [dataFim, setDataFim] = useState(null)
  const [bands, setBands] = useState([
    {
      band: "Djávu",
      style: 'Sertanejo'
    },
    {
      band: "Calcinha Preta",
      style: 'MBP'
    },
  ])
  const [shows, setShows] = useState([])


  const onChange = useCallback(async () => {
    try {
      // const query = {
      //   nome: value
      // }
      // const result = await bandService.search(query)
      const showsss = bands.filter(item => item.band === search)
      setShows(showsss)
    } catch (error) {

    }
  }, [bands, search])

  const onAdd = useCallback(() => {
    try{
      navigation.navigate('ScheduleScreen')
    }catch (error) {

    }

  },[])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppBar onlyGoBack={true} navigation={navigation} />
      <View style={{ marginTop: 10 }}>
      <TextInput
          mode="flat"
          style={{width:'85%', marginLeft: 30, marginBottom: 25}}
          label="Hora Inicio"
          value={hour}
          maxLength={4}
          keyboardType="number-pad"
          onChangeText={setHour}
        />
      <TextInput
          mode="flat"
          style={{width:'85%', marginLeft: 30}}
          label="Hora Final"
          value={dataFim}
          maxLength={4}
          keyboardType="number-pad"
          onChangeText={setDataFim}
        />
        <View style={{ display: 'flex', flexDirection:'row', margin: 30, color: "white", fontSize: 20 }}>
        <TextInput
          mode="flat"
          style={{width:'100%'}}
          label="Nome da Banda"
          value={search}
          onChangeText={setSearch}
        />
        </View>
          <Button color="white" style={{marginBottom: 25}} onPress={onChange} ><Text>Procurar</Text></Button>
        {shows.length ?
          shows.map((item) => (
            <Card
              key={item.band}
              style={{
                margin: 15,
                backgroundColor: "#747474",
              }}
            >
              <Card.Title
                title={<Text style={{ color: "white" }}>{item.band}</Text>}
              />
              <Card.Content>
                <Text style={{ color: "white", fontSize: 14 }}>{item.style}</Text>
                <Button onPress={onAdd}><Text style={{ color: 'white' }} >Contratar</Text></Button>
              </Card.Content>
            </Card>
          )) : <Text
            style={{
              color: "white",
              fontSize: 17,
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Nenhum Resultado :(
      </Text>
        }
      </View>
    </ScrollView>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 80,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
