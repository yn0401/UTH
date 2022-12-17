import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";
import LoginScreen from "./login";

const ProfileScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.head}>
            <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
              Account
            </Text>
            <View style={{ marginLeft: 0, flexDirection: "row" }}>
              <View style={styles.square1}></View>
              <View style={styles.square1}></View>
              <View style={styles.square1}>
              <TouchableOpacity style={styles.btnNoti}>
                  <Ion name="pencil" style={styles.iconNoti} />
                </TouchableOpacity>
              </View>
              <View style={styles.square1}>
                <TouchableOpacity style={styles.btnNoti}>
                  <Ion name="notifications" style={styles.iconNoti} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.avatar}>
            <Image
              style={styles.img}
              source={{
                uri: "https://znews-photo.zingcdn.me/w660/Uploaded/bzwvopcg/2021_02_12/bl.jpg",
              }}
            />
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.txtName}>Hi, Rosé</Text>
          <Image
            style={styles.imgCard}
            source={{
              uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/313887721_3264199950495650_4192295597576375198_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=rNRUp2dovhEAX-tMgdU&_nc_oc=AQnXRFCCYl8Mwh8Wl9YnY8W8MYaf7Z9qXNSKThnQvmADeVsy-La7suumR8zt756MgxU&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDWzz5sFepltHQEHXzpXvoaERL4FbQqX_sY-zL9St8Jbw&oe=638F827C",
            }}
          />
          <View>
            <Text style={styles.txtMem}>MEMBER</Text>
            <Text style={styles.txtMem}>CARD</Text>
            <Text style={styles.txtNumber}>**** **** **** 4568</Text>
            <Text style={styles.txtNamee}>NHI DANG NGOC YEN</Text>
            <Text style={styles.txtRole}>MEMBER</Text>
            <View style={styles.row}>
              <View style={styles.colunm}>
                <Text style={styles.txtBalance}>BALANCE</Text>
                <Text style={styles.txtCoin}>1.000.000</Text>
              </View>
              <View style={styles.colunm1}>
                <Text style={styles.txtValid}>VALID FROM</Text>
                <Text style={styles.txtDay}>01/01</Text>
              </View>
            </View>
          </View>

          <View style={styles.intro}>
            <Text style={styles.txtIntro}>Total savings</Text>
            <Text style={styles.txtIntro1}>
              You signed up on 12 December 2021
            </Text>
            <Text style={styles.point}>54353643,76P</Text>
            <Text style={styles.txtThanks}>
              Thanks to your archievements, Keep up your good form !!
            </Text>
          </View>

          <TouchableOpacity style={styles.signout} onPress={LoginScreen}>
            <Text style={styles.txtSignout}>Sign Out</Text>
            <Fo
              name="sign-out-alt"
              size={30}
              style={{ textAlign: "right", width: 40 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#426ef0",
  },
  scrollView: {
    backgroundColor: "white",
  },
  header: {
    height: 180,
    backgroundColor: "#426ef0",
    width: "100%",
    paddingTop: 135,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  main: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  head: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#426ef0",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  square1: {
    backgroundColor: "#426ef0",
    flexDirection: "row",
    width: 50,
    height: 50,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center",
  },
  btnNoti: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  iconNoti: {
    color: "#426ef0",
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 180,
    width: 180,
    borderRadius: 180 / 2,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
  },
  imgCard: {
    margin: 20,
    height: 250,
    width: 390,
    justifyContent: "center",
  },
  avatar: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    width: 205,
    height: 205,
    backgroundColor: "#426ef0",
    justifyContent: "center",
    borderRadius: 205 / 2,
  },
  txtName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  txtMem: {
    top: -260,
    left: 150,
    fontSize: 25,
    width: 170,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    textAlign: "right",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
  },
  txtNumber: {
    top: -250,
    fontSize: 25,
    left: -10,
    width: 300,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    letterSpacing: 5,
  },
  txtNamee: {
    top: -240,
    left: -10,
    fontSize: 16,
    width: 300,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.9,
    letterSpacing: 3,
  },
  row: {
    flexDirection: "row",
  },
  colunm: {
    flexDirection: "column",
    width: 100,
    left: -10,
  },
  colunm1: {
    flexDirection: "column",
    width: 100,
    left: 150,
  },
  txtRole: {
    top: -235,
    left: -10,
    fontSize: 10,
    width: 300,
    fontWeight: "bold",
    color: "white",
    flexWrap: "wrap",
    letterSpacing: 1,
  },
  txtBalance: {
    top: -225,
    fontSize: 10,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    letterSpacing: 1,
  },

  txtValid: {
    top: -225,
    fontSize: 10,
    width: 80,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    letterSpacing: 1,
  },
  txtCoin: {
    top: -225,
    fontSize: 25,
    width: 150,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    letterSpacing: 1,
  },
  txtDay: {
    top: -225,
    fontSize: 20,
    width: 60,
    fontWeight: "medium",
    color: "white",
    flexWrap: "wrap",
    letterSpacing: 1,
  },
  intro: {
    top: -190,
    padding: 10,
    height: 260,
    width: 340,
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  txtIntro: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtIntro1: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  point: {
    fontSize: 36,
    marginTop: 50,
    marginBottom: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtThanks: {
    fontSize: 14,
  },
  signout: {
    top: -200,
    marginTop: 40,
    padding: 10,
    height: 60,
    width: 340,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  txtSignout: {
    fontSize: 15,
    width: 280,
    fontWeight: "bold",
  },
});
