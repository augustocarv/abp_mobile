import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Dropdown from "../dropdown";

const AppBar = ({ home, add, navigation, onAdd, onlyGoBack }) => {
  const [ openDropdown, setOpenDropdown] = React.useState(false)
  return (
    <View
      style={{
        backgroundColor: "#404040",
        height: 50,
        borderColor: "red",
        margin: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {onlyGoBack ? (
        <Text style={{ marginTop: 25 }} onPress={navigation.goBack}>
          Voltar
        </Text>
      ) : (
        <>
          {home ? (
            <Text style={{ marginTop: 25 }}>
              Home
            </Text>
          ) : (
            <Text style={{ marginTop: 25 }} onPress={navigation.goBack}>
              Voltar
            </Text>
          )}
          <Text style={{ marginTop: 25 }}>Logo</Text>
          {add ? (
            <Text style={{ marginTop: 25 }} onPress={onAdd}>
              Plus
            </Text>
          ) : (
            <>
            <Dropdown />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
