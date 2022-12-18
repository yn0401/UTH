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
import AddMem from "./add";
import UpdateMember from "./updateMember";
import DetailProfile from "./profileDetails";
import AddGift from "./addGift";
import DetailGift from "./giftDetails";
import UpdateGift from "./updateGift";
import StartScreen from "./start";
import RegisterScreen from "./register";
import AddEvent from "./addEvent";
import UpdateEvent from "./updateEvent";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator
    initialRouteName="Start"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen
      name="Start"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Guest"
      component={GuestScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Main"
      component={MainScreen}
      options={{ headerShown: false }}
    />
    <Screen name="Gift" component={TransactionDetailsScreen} />
    <Screen name="Event" component={EventScreen} />
    <Screen name="Profile" component={ProfileScreen} />
    <Screen name="InfoEvent" component={InfoEventScreen} />
    <Screen name="AddMember" component={AddMem} />
    <Screen name="UpdateMember" component={UpdateMember} />
    <Screen name="DetailProfile" component={DetailProfile} />
    <Screen name="AddGift" component={AddGift} />
    <Screen name="UpdateGift" component={UpdateGift} />
    <Screen name="DetailGift" component={DetailGift} />
    <Screen name="AddEvent" component={AddEvent} />
    <Screen name="UpdateEvent" component={UpdateEvent} />
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
