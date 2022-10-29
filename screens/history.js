import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

const HistoryScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>ADD!</Text>
      </View>
    );
};
export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flex: 3,
        backgroundColor: "#426ef0",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    showWindow: {
        flexDirection: "row",
    },
    infoBar: {
        width: "100%",
    },
    content: {
        flex: 7,
        width: "100%",
    },
    avatar: {
        backgroundColor: "#fff",
        height: 100,
        width: 100,
        borderRadius: 100,
        marginRight: 20,
    },
    info: {
        // width: "100%",
    },
    name: {
        fontSize: 20,
        backgroundColor: "#426ef0",
        color: "#fff",
        fontWeight: "bold",
    },
    role: {
        fontSize: 15,
        backgroundColor: "#426ef0",
        color: "#fff",
    },
    window: {
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
});
