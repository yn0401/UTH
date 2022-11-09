import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./login";
import ViewAll from "./viewAll";
import MainScreen from "./viewAll";

import GuestScreen from "./guest1";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={LoginScreen} />
    <Screen name="Main" component={MainScreen} />
    <Screen name="Guest" component={GuestScreen} />
  </Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
