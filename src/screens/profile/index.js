import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, AsyncStorage } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import AppBar from "../../components/appbar";
import ButtonBack from "../../components/backbutton";
import { userService } from "../../services/user";
import BandProfile from "./utils/bandProfile";
import EstablishmentProfile from "./utils/establishmentProfile";

const ProfileScreen = ({ navigation }) => {
  const [role, setRole] = React.useState(1);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AppBar onlyGoBack={true} navigation={navigation} />
      {role === 1 ? <EstablishmentProfile navigation={navigation} /> : <BandProfile navigation={navigation} />}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  calendar: {
    marginTop: 80,
    margin: 10,
    marginBottom: 10,
    backgroundColor: "#404040",
  },
});
