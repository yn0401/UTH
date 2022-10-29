import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import Ant from "react-native-vector-icons/AntDesign";
import HomeScreen from "./home";
import GiftScreen from "./gift";
import HistoryScreen from "./history";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#c2c2c2",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#426ef0" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={GiftScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ant name="idcard" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainScreen;

const styles = StyleSheet.create({

});
