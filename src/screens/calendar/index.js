import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Card } from "react-native-paper";
import moment from "moment";
import { useNavigation } from '@react-navigation/native'

import AppBar from "../../components/appbar";
import { userService } from "../../services/user";
import Dropdown from "../../components/dropdown";
LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dezem",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Quar", "Quin", "Sex", "Sáb"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

const CalendarScreen = ({ navigation }) => {
  const nav = useNavigation();

  const [selected, setSelected] = useState("");
  const [dates, setDates] = useState([])
  const onDayPress = useCallback(
    (day) => {
      setSelected(day.dateString);
      navigation.navigate(`Schedule`, { date: day.dateString });
    },
    [])
  const onInit = useCallback(
    () => {
      try {
        // const result = userService.getAgenda()
        // setDates(result.data)
      }
      catch (err) {

      }
    },
    [])

  useEffect(() => {
    onInit()
    nav.setOptions({
      headerRight: () => <Dropdown navigation={navigation}/>,
    });
  }, [onInit])

  return (
    <ScrollView showsVerticalScrollIndicator={false} testID={"menu"}>
      <Calendar
        testID={"first_calendar"}
        current={moment(new Date()).format("YYYY-MM-DD")}
        style={styles.calendar}
        hideExtraDays
        theme={{
          backgroundColor: "#747474",
          calendarBackground: "#747474",
          textSectionTitleColor: "#747474",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#747474",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "white",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "white",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "white",
          indicatorColor: "white",
          textDayFontFamily: "Roboto",
          textMonthFontFamily: "Roboto",
          textDayHeaderFontFamily: "Roboto",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: false,
            selectedColor: "#7113FF",
            selectedTextColor: "white",
          },
        }}
      />
      <View>
        <Card
          style={{
            marginTop: 50,
            margin: 15,
            height: 250,
            backgroundColor: "#747474",
          }}
        >
          <Card.Title
            title={<Text style={{ color: "white" }}>Resumo do Mês</Text>}
          />
          <Card.Content style={{marginBottom: 25}}>
            <ScrollView style={{padding: 10}}>
            {/* {dates.map((item) => (
              <Text style={{color:'white', margin: 15, fontSize: 18}}>{item.nome}</Text>
            ))} */}
            <Text style={{color:'white', margin: 15, fontSize: 18}}>Banda Djavu</Text>
            <Text style={{color:'white', margin: 15, fontSize: 18}}>Calcinha Preta</Text>
            </ScrollView>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
