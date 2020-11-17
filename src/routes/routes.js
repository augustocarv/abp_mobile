import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/index'
import LoginScreen from '../screens/login/login';
import SignIn from '../screens/login/signin';

const Stack = createStackNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="HomeScreen" headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#404040'
                }
            }}>
                <Stack.Screen name="HomeScreen" component={Home} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes