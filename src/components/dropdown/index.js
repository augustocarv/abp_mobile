import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const Dropdown = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Text style={{ marginTop: 25 }} onPress={openMenu}>Avatar</Text>}>
          <Menu.Item onPress={() => {}} title="Perfil" />
          <Menu.Item onPress={() => {}} title="Navegar" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Logout" />
        </Menu>
  );
};

export default Dropdown;