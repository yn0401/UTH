import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as transactionActions from "../redux/actions/transactionAction";

const HistoryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const transaction = useSelector((store) => store.transactions);

  useEffect(() => {
    dispatch(transactionActions.fecthAll());
    console.log(transaction);
  }, []);

  const ListTransaction = ({ item }) => {
    return (
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={styles.gift}>
          <View style={styles.gift1}>
            <View
              style={{
                width: "30%",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Foun
                name="shopping-bag"
                style={{
                  color: "#2F498C",
                  fontSize: 25,
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              />
              <Text style={styles.txtGiftActive}>{item.name}</Text>
            </View>
            <View style={{ width: "40%" }}>
              <Text style={styles.time}>{item.createAdd}</Text>
            </View>
            <View style={{ textAlign: "right", width: "25%" }}>
              <Text style={styles.point}>-{item.point}P</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.main}>
            <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
              Transactions
            </Text>
            <View style={{ marginLeft: 0, flexDirection: "row" }}>
              <View style={styles.square1}></View>
              <View style={styles.square1}></View>
              <View style={styles.square1}>
                <TouchableOpacity style={styles.btnNoti}>
                  <Ion name="notifications" style={styles.iconNoti} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={{ marginTop: 30, flexDirection: "row", width: "100%" }}>
            <View style={{ marginLeft: 35, width: "30%" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
              >
                Recent
              </Text>
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.btnText1}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btnText2}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn3}>
              <Text style={styles.btnText3}>Expense</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            keyExtraction={(transaction) => transaction.id}
            data={transaction.transactions}
            renderItem={ListTransaction}
            disableVirtualization={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#426ef0",
  },
  scrollView: {
    backgroundColor: "white",
  },
  header: {
    height: 135,
    backgroundColor: "#426ef0",
    width: "100%",
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
    top: -28,
    backgroundColor: "white",
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
    fontSize: 11,
    color: "#B0BFE8",
  },
  window: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
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

  main: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#426ef0",
    flexDirection: "row",
    margin: 20,
    marginLeft: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    backgroundColor: "#426ef0",
    width: 50,
    height: 50,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center",
  },
  square1: {
    backgroundColor: "#426ef0",
    flexDirection: "row",
    width: 50,
    height: 50,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center",
  },
  main1: {
    marginTop: 20,
    width: 351,
    height: 60,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  main2: {
    marginTop: 20,
    width: 351,
    height: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn1: {
    alignItem: "center",
    justifyContent: "center",
    height: 40,
    width: 80,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn2: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 113,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn3: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 113,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn4: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 70,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btnText1: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#426EF0",
    fontWeight: "bold",
  },
  btnText2: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#7AD187",
  },
  btnText3: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#FF6A62",
  },
  btnText4: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#800080",
  },
  txtToday: {
    marginLeft: 35,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  txtYesterday: {
    marginLeft: 35,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  txtTime: {
    marginLeft: 35,
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  gift: {
    borderRadius: 15,
    width: 370,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  gift1: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    height: 80,
    borderBottomColor: "#EFF3FF",
  },
  txtGiftActive: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    flexWrap: "wrap",
  },
  txtGiftNotActive: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    opacity: 0.3,
  },
  time: {
    fontSize: 11,
    color: "#B0BFE8",
    textAlign: "right",
  },
  point: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
    color: "#FF6A62",
  },
  pointPlus: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
    color: "#7AD187",
  },
});
