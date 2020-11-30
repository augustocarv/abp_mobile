import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/index'
import LoginScreen from '../screens/login/login';
import SignIn from '../screens/login/signin';
import CalendarScreen from '../screens/calendar';
import ScheduleScreen from '../screens/calendar/schedule/index'
import FindScreen from '../screens/search'
import ProfileScreen from '../screens/profile'
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
                <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
                <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
                <Stack.Screen name="FindScreen" component={FindScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes
