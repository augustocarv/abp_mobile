import * as React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

const Dropdown = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onLogout = React.useCallback(() => {
    AsyncStorage.clear();
    navigation.navigate("Home");
    setVisible(false)
  }, []);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Button icon="account-circle" labelStyle={{fontSize: 22, marginLeft: 10}} style={{marginLeft: 15}} color="white" onPress={openMenu}/>
      }
    >
      <Menu.Item onPress={() => [navigation.navigate("Profile"), setVisible(false)]} title="Perfil" />
      <Menu.Item onPress={onLogout} title="Logout" />
    </Menu>
  );
};

export default Dropdown;
