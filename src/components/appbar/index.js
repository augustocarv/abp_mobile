import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Dropdown from "../dropdown";

const AppBar = ({ home, add, navigation, onAdd, onlyGoBack }) => {
  const [openDropdown, setOpenDropdown] = React.useState(false)
  const [roleUser, setRole] = React.useState(1)
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
        <Text style={{ marginTop: 25, color:'white' }} onPress={navigation.goBack}>
          Voltar
        </Text>
      ) : (
          <>
            {home ? (
              <Text style={{ marginTop: 25, color:'white' }}>
                Home
              </Text>
            ) : (
                <Text style={{ marginTop: 25, color:'white' }} onPress={navigation.goBack}>
                  Voltar
                </Text>
              )}
            <Text style={{ marginTop: 25, color:'white' }}>FindBand</Text>
            {add ? (
              roleUser === 1 ?
                <Text style={{ marginTop: 25, color:'white' }} onPress={onAdd}>
                  Adicionar
            </Text>
                : <Text style={{ marginTop: 25, color:'white' }} onPress={onAdd}>
                </Text>
            ) : (
                <>
                  <Dropdown navigation={navigation} />
                </>
              )}
          </>
        )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
