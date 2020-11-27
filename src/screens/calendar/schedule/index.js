import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card } from "react-native-paper";
import ButtonBack from "../../../components/backbutton";
import moment from "moment";
const ScheduleScreen = ({ route, navigation }) => {
  const [shows, setShows] = useState([
    {
      band: "Djávu",
      hourStart: '19h:00',
      hourFinish: '22h:00',
      style:'Sertanejo'
    },
    {
      band: "Calcinha Preta",
      hourStart: '18h:00',
      hourFinish: '19h:00',
      style:'MBP'
    },
  ]);
  const { date } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ButtonBack goBack={navigation.goBack}/>
      <View style={{ marginTop: 50 }}>
        <Text style={{ margin: 30, color: "white", fontSize: 20 }}>
          {moment(date).format("LL")}
        </Text>
        {shows.map((item) => (
          <Card
            style={{
              margin: 15,
              backgroundColor: "#747474",
            }}
          >
            <Card.Title
              title={<Text style={{ color: "white" }}>{item.band}</Text>}
              subtitle={<Text style={{ color: "white", fontSize: 14 }}>{item.hourStart} às {item.hourFinish}</Text>}
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

export default ScheduleScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 80,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
