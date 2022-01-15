import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import LoadingScreen from "../../screens/LoadingScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignInScreens from "../../screens/SignUpScreen";
import SplashScreen from "../../screens/SplashScreen";
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignInScreens} />
    </RootStack.Navigator>
);

export default RootStackScreen;
