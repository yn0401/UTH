import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../redux/actions/giftAction";

function GiftScreen({ navigation }) {
  const dispatch = useDispatch();
  const db = useSelector((store) => store.gifts);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const addGift = () => {
    navigation.navigate("AddGift");
  };

  const detail = (id) => {
    console.log(id);
    navigation.navigate("DetailGift", {
      id: id,
    });
  };

  const ListGift = ({ item }) => {
    return (
      // <TouchableOpacity>
      <View style={styles.card}>
        <TouchableOpacity style={styles.gift} onPress={() => detail(item.id)}>
          <View style={styles.contentCard}>
            <TouchableOpacity style={styles.nameGift} onPress={() => detail(item.id)}>
              <Image
                style={styles.iconGift}
                source={{
                  uri: item.photoURL,
                }}
              />
              <Text style={styles.txtGiftActive}>{item.name}</Text>
              <Mate
                name={item.icon}
                color={item.colorfire}
                style={styles.iconFire}
              />
            </TouchableOpacity>
            <View style={styles.viewPoint}>
              <Text style={styles.point}>{item.point}P</Text>
            </View>
            <TouchableOpacity>
              <Mate name="gift" color="red" style={styles.iconGift1} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      // </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.main}>
          <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
            Gift
          </Text>
          <View style={{ marginLeft: 130, flexDirection: "row" }}>
            <View style={styles.square1}></View>
            <View style={styles.square1}>
              <TouchableOpacity
                onPress={addGift}
                style={{
                  marginLeft: 10,
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fo name="plus" style={styles.icon3} />
              </TouchableOpacity>
            </View>
            <View style={styles.square1}>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  height: 40,
                  width: 40,
                  borderRadius: 40 / 2,
                  backgroundColor: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ion name="notifications" style={styles.icon3} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginBottom: 3,
              fontSize: 20,
              color: "#888888",
              fontWeight: "bold",
            }}
          >
            Remaining Point
          </Text>
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ marginLeft: 20, width: "30%" }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: "#426ef0" }}
            >
              1253544
            </Text>
          </View>
          <View style={{ textAlign: "right", width: "60%" }}>
            <Text
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: 16,
                color: "#426ef0",
              }}
            >
              Select Type
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.btnText1}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btnText2}>Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn3}>
            <Text style={styles.btnText3}>Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn4}>
            <Text style={styles.btnText4}>Used</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: 20, flexDirection: "row", width: "100%" }}>
            <View style={{ marginLeft: 30, width: "50%" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
              >
                Filter(P)
              </Text>
            </View>
            <View
              style={{
                alignItems: "flex-end",
                width: "35%",
                flexDirection: "row",
              }}
            >
              <Fo name="arrow-alt-circle-down" style={styles.icon} />
              <Text
                style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
              >
                DSC
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={db.gifts}
          renderItem={ListGift}
          disableVirtualization={true}
        />
      </View>
    </SafeAreaView>
  );
}
export default GiftScreen;

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
  icon: {
    color: "#426ef0",
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    textAlign: "right",
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
    color: "#426ef0",
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  icon4: {
    color: "#426ef0",
    fontSize: 25,
    fontWeight: "bold",
    width: "20%",
  },
  main: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#426ef0",
    flexDirection: "row",
    marginTop: 20,
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
    alignItem: "center",
    justifyContent: "center",
    paddingLeft: 30,
  },
  btn1: {
    alignItem: "center",
    justifyContent: "center",
    height: 40,
    width: 80,
    borderRadius: 15,
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
    borderRadius: 15,
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
    width: 70,
    borderRadius: 15,
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
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
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
  gift: {
    borderRadius: 8,
    width: 370,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  card: {
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#EFF3FF",
  },
  contentCard: {
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    // borderBottomWidth: 2,
    height: 90,
    width: "100%",
    // borderBottomColor: '#EFF3FF'
  },
  nameGift: {
    width: "70%",
    alignItems: "center",
    flexDirection: "row",
  },
  iconGift: {
    fontSize: 25,
    fontWeight: "bold",
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  iconGift1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    width: "15%",
  },
  iconFire: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "bold",
    width: "15%",
  },
  txtGiftActive: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
  },
  txtGiftNonActive: {
    opacity: 0.3,
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
  },
  viewPoint: {
    alignItems: "flex-end",
    width: "20%",
  },
  point: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#FF6A62",
  },
});
