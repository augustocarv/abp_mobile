import React, { useState, Fragment } from "react";
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
  const [selected, setSelected] = useState("");

  const onDayPress = (day) => {
    setSelected(day.dateString);
    navigation.navigate(`ScheduleScreen`, { date: day.dateString });
  };

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
          <Card.Content>
            <Text> </Text>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 80,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
