import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { View } from "react-native-web";

const LoginScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.img}
          source={{
            uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/310339140_423710913141384_5313094900728762288_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=jsNrgZjWO_sAX_M7X73&_nc_ht=scontent.xx&oh=03_AdS7orH55pLPsX6uY6NKxQTHa0MHIx7Bo51pmXlTB_jacA&oe=637D0655",
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
        <TouchableOpacity onPress={navigate} style={styles.button}>
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
