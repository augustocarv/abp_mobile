import React, { useState, useCallback } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Card, Button } from "react-native-paper";
import ButtonBack from "../../../components/backbutton";
import moment from "moment";
import AppBar from "../../../components/appbar";
const ScheduleScreen = ({ route, navigation }) => {
  const [shows, setShows] = useState([
    // {
    //   band: "Djávu",
    //   hourStart: '19h:00',
    //   hourFinish: '22h:00',
    //   style:'Sertanejo'
    // },
    // {
    //   band: "Calcinha Preta",
    //   hourStart: '18h:00',
    //   hourFinish: '19h:00',
    //   style:'MBP'
    // },
  ]);
  const onAdd = useCallback(
    () => {
      navigation.navigate('FindScreen')
    },
    [],
  )
  const { date } = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppBar add={true} onAdd={onAdd} navigation={navigation}/>
      <View style={{ marginTop: 10 }}>
        <Text style={{ margin: 30, color: "white", fontSize: 20 }}>
          {moment(date).format("LL")}
        </Text>
        {shows.length ? (
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
                subtitle={
                  <Text style={{ color: "white", fontSize: 14 }}>
                    {item.hourStart} às {item.hourFinish}
                  </Text>
                }
                s
              />
              <Card.Content>
                <Text style={{ color: "white", fontSize: 14 }}>
                  {item.style}
                </Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text
            style={{
              color: "white",
              fontSize: 17,
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            Sem shows para hoje :(
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
