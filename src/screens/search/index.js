import React, { useCallback, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import AppBar from "../../components/appbar";
import { bandService } from "../../services/band";

const FindScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const [shows, setShows] = useState([])


  const onChange = useCallback(async (value) => {
    try {
      const query = {
        nome: value
      }
      const result = await bandService.search(query)
      setShows(result.data)
    } catch (error) {

    }
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppBar onlyGoBack={true} navigation={navigation} />
      <View style={{ marginTop: 10 }}>
        <View style={{ margin: 30, color: "white", fontSize: 20 }}>
          <Searchbar placeholder="Search" value={search} onChangeText={value => onChange(value)} />
        </View>
        {shows.map((item) => (
          <Card
            key={item.band}
            style={{
              margin: 15,
              backgroundColor: "#747474",
            }}
          >
            <Card.Title
              title={<Text style={{ color: "white" }}>{item.band}</Text>}
              subtitle={
                <Text style={{ color: "white", fontSize: 14 }}>
                  {item.hourStart} às {item.hourFinish}
                </Text>
              }
              s
            />
            <Card.Content>
              <Text style={{ color: "white", fontSize: 14 }}>{item.style}</Text>
            </Card.Content>
          </Card>
        ))}
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
