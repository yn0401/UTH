import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./login";
import ViewAll from "./viewAll";
import MainScreen from "./viewAll";
import EventScreen from "./event";
import InfoEventScreen from "./infoevent";
import GuestScreen from "./guest1";
import ProfileScreen from "./profile";
import TransactionDetailsScreen from "./transactiondetails";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: true }}>
    <Screen name="Home" component={LoginScreen} options={{ headerShown: false }}/>
    <Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
    <Screen name="Guest" component={GuestScreen} options={{ headerShown: false }}/>
    <Screen name="Gift" component={TransactionDetailsScreen}  />
    <Screen name="Event" component={EventScreen}/>
    <Screen name="Profile" component={ProfileScreen}/>
    <Screen name="InfoEvent" component={InfoEventScreen}/>
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
