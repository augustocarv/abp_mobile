import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native'
import Home from '../screens/home/index'
import LoginScreen from '../screens/login/login';
import SignIn from '../screens/login/signin';
import CalendarScreen from '../screens/calendar';
import ScheduleScreen from '../screens/calendar/schedule/index'
import FindScreen from '../screens/search'
import ProfileScreen from '../screens/profile'
import Dropdown from '../components/dropdown';
const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#404040'
                    },
                    headerStyle: {
                        backgroundColor: "#404040",
                        borderBottomColor: '#404040',
                    },
                    headerTintColor:'white'

                }}

            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignIn} />
                <Stack.Screen name="Calendar" component={CalendarScreen} />
                <Stack.Screen name="Schedule" options={{
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }} component={ScheduleScreen} />
                <Stack.Screen name="Find" component={FindScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes
