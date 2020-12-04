import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card, Searchbar, TextInput } from "react-native-paper";
import moment from 'moment'
import { bandService } from "../../services/band";
import Button from '../../components/button'
const FindScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [hour, setHour] = useState(null)
  const [dataFim, setDataFim] = useState(null)
  const { date } = route.params;
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
      navigation.navigate('Schedule')
    }catch (error) {

    }

  },[])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 10 }}>
      <Text style={{ margin: 30, color: "white", fontSize: 20 }}>
          {moment(date).format("LL")}
        </Text>
        <View style={{ display: 'flex', flexDirection:'row', margin: 30, color: "white", fontSize: 20 }}>
        <TextInput
          mode="flat"
          style={{width:'100%'}}
          label="Nome da Banda"
          value={search}
          onChangeText={setSearch}
        />
        </View>
          <Button mode="contained" style={{marginBottom: 60, width: '50%', alignSelf:'center'}} onPress={onChange}> Procurar </Button>
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
