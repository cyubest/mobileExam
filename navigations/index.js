import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './private';
import PublicScreens from './public';
import { useSelector, useDispatch } from 'react-redux';
import { APP, AUTH } from '../constants/navigationNames';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const isiOS = Platform.OS === 'ios';

const Stack = createStackNavigator();

export default function App() {
    const [tokens, setToken] = useState();
    const { profile } = useSelector(state => state.currentUser);
    useEffect(() => {
        getToken();
    }, [tokens])
    const getToken = async () => {
        const token = await AsyncStorage.getItem('token');
        // console.log(profile.data.token, 'myToken')
        setToken(token)
    }

    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={profile.data ? "APP" : "AUTH"}
                screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen
                    name={APP}
                    component={AppNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={AUTH}
                    component={PublicScreens}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'profile'}
                    component={ProfileScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'home'}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
