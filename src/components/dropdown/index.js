import * as React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const Dropdown = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onLogout = React.useCallback(() => {
    AsyncStorage.clear();
    navigation.navigate("HomeScreen");
    setVisible(false)
  }, []);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Text style={{ marginTop: 25, color:'white' }} onPress={openMenu}>
          Avatar
        </Text>
      }
    >
      <Menu.Item onPress={() => [navigation.navigate("ProfileScreen"), setVisible(false)]} title="Perfil" />
      <Menu.Item onPress={onLogout} title="Logout" />
    </Menu>
  );
};

export default Dropdown;
