import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import Ant from "react-native-vector-icons/AntDesign";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";


const HomeScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate("ViewAll");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.head}>
            <View style={styles.infoBar}>
              <View style={styles.avatar}>
                <Image
                  style={styles.img}
                  source={{
                    uri: "https://dep.com.vn/wp-content/uploads/2019/01/BLACKPINK-Lisa-New-Instagram-Profile-Picture-November-2018.jpg",
                  }}
                />
              </View>
              <View styles={styles.info}>
                <Text style={styles.name}>Đặng Ngọc Yến Nhi</Text>
                <Text style={styles.role}>Role</Text>
              </View>
            </View>
            <View style={styles.show}>
              <View style={styles.showWindow}>
                <View style={styles.window1}>
                  <Fo name="coins" style={styles.icon} />
                  <View style={{ paddingLeft: 10, flexDirection: 'column' }}>
                    <Text style={{ color: "#426EF0", fontSize: 15, fontWeight: 'medium' }}>Remaning Points</Text>
                    <Text style={{ color: "#426EF0", fontSize: 15, fontWeight: 'bold' }}>1253544</Text>
                  </View>
                </View>

              </View>
              <View style={styles.showWindow1}>
                <View style={styles.window2}>
                  <Fo name="crown" style={styles.icon} />
                  <View style={{ paddingLeft: 10, flexDirection: 'column' }}>
                    <Text style={{ color: "#426EF0", fontSize: 15, fontWeight: 'medium' }}>Remaning Points</Text>
                    <Text style={{ color: "#426EF0", fontSize: 15, fontWeight: 'bold' }}>1253544</Text>
                  </View>
                </View>

              </View>
            </View>

          </View>
        </View>
        <View style={{
          flex: 8, top: 80, justifyContent: 'center',
          alignItems: "center",
        }}>
          <View style={styles.main}>
            <TouchableOpacity style={styles.square} >
              <Mate name="clipboard-account" style={styles.icon1} />
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Account</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.square} >
              <Mat name="report" style={styles.icon2} />
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square} >
              <Mate name="qrcode-scan" style={styles.icon3} />
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Scan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main1}>
            <Text>aaa</Text>
          </View>
          <View style={styles.main2}>
            <Text style={{ fontSize: 60 }}>aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  header: {
    flex: 2,
    backgroundColor: "#426ef0",
    width: "100%",
  },
  head: {
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#426ef0",
    height: 100,
    width: 100,
    marginRight: 20
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: 'white'
  },
  infoBar: {
    flexDirection: 'row',
    // backgroundColor: "black",
  },
  info: {
    // width: '60%',
    // height: '40%',
    paddingTop: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: "center",
  },
  name: {
    paddingTop: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: "center",
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  role: {
    justifyContent: 'center',
    alignItems: "center",
    fontWeight: 'medium',
    fontSize: 20,
    color: 'white'
  },
  show: {
    flexDirection: 'row',

    padding: 20
  },
  icon: {
    color: "#426EF0",
    fontSize: 14,
    fontWeight: "bold",
    width: "10%",
  },
  icon1: {
    color: "#426EF0",
    fontSize: 30,
    fontWeight: "bold",
    width: "30%",
  },
  icon2: {
    color: "#F96262",
    fontSize: 30,
    fontWeight: "bold",
    width: "30%",
  },
  icon3: {
    color: "#9E5FE0",
    fontSize: 30,
    fontWeight: "bold",
    width: "30%",
  },
  showWindow: {
    width: 171,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: "center",
  },
  showWindow1: {
    width: 171,
    height: 60,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: "center",
  },
  window1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  window2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
  },
  main: {
    width: 351,
    height: 120,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    flexDirection: 'row',
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center",

  },
  square: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 4,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center",
  },
  main1: {
    marginTop: 20,
    width: 351,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  main2: {
    marginTop: 20,
    width: 351,
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
