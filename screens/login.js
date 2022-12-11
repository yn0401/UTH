import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import QRScreen from "./qr";


const LoginScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("Main");
}; 

const navigate1 = () => {
  navigation.navigate("Guest");
}; 

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.img}
          source={{
            uri: "https://as2.ftcdn.net/v2/jpg/02/78/41/91/1000_F_278419195_XyHPPySaxCaAMfUpoCjaze47tQ8tqJ5E.jpg",
          }}
        />
        <Text style={styles.title}>UNDER THE HOOD</Text>
        <Text style={styles.subTitle}>Membership Gift Exchange App</Text>
      </View>
      <View>
        <TouchableOpacity onPress={navigate} style={styles.button}>
          <Text style={styles.btn}>Sign in</Text>
          <Icon name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity onPress={navigate1} style={styles.button}>
          <Text style={styles.btn}>Guest</Text>
          <Icon name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#426ef0",
  },
  subTitle: {
    fontSize: 13,
    color: "#426ef0",
  },
  button: {
    backgroundColor: "#426ef0",
    padding: 15,
    borderRadius: 25,
    width: 300,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: "90%",
    textAlign: "center",
    marginLeft: 10,
  },
  img: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  icon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: "10%",
  },
});
