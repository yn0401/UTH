import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../redux/actions/memberAction";

const HomeScreen = ({ route, navigation }) => {
  // const id = route.params.id;
  // const navigateUpdate = (id) => {
  //   navigation.navigate("Update", { member: memberData, id: id });
  // };
  const navigate = () => {
    navigation.navigate("ViewAll");
  };

  const event = () => {
    navigation.navigate("Event");
  };

  const profile = () => {
    navigation.navigate("Profile");
  };

  const add = () => {
    navigation.navigate("AddMember");
  };

  const dispatch = useDispatch();
  const member = useSelector((store) => store.members);

  const [memberData, setMemberData] = useState({});

  useEffect(() => {
    dispatch(fetchAll());
    console.log(member);
  }, []);

  const ListMember = ({ item }) => {
    return (
      <TouchableOpacity style={styles.main2}>
        <View style={styles.member}>
          <View style={styles.mem}>
            <View style={styles.imgMem}>
              <Image style={styles.avaMem} source={{ uri: item.photoURL }} />
              <Text style={styles.nameMem}>{item.name}</Text>
              <Image
                style={styles.roleImg}
                source={{
                  uri: "https://media.istockphoto.com/vectors/prom-crown-icon-on-transparent-background-vector-id1283621184?k=20&m=1283621184&s=170667a&w=0&h=QDKKu214swaBGS5WGV-rWFw_qFn5YbxGbnHd8NlqhfM=",
                }}
              />
            </View>
            <View style={styles.point}>
              <Text style={styles.txtPoint}>{item.totalPoint} P </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
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
                <Text style={styles.role}>Member</Text>
              </View>
            </View>
            <View style={styles.show}>
              <View style={styles.showWindow}>
                <TouchableOpacity style={styles.window1}>
                  <Fo name="coins" style={styles.icon} />
                  <TouchableOpacity
                    style={{ paddingLeft: 10, flexDirection: "column" }}
                  >
                    <Text
                      style={{
                        color: "#426EF0",
                        fontSize: 15,
                        fontWeight: "medium",
                      }}
                    >
                      Remaning Points
                    </Text>
                    <Text
                      style={{
                        color: "#426EF0",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      1253544
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
              <View style={styles.showWindow1}>
                <TouchableOpacity style={styles.window2}>
                  <Fo name="crown" style={styles.icon} />
                  <View style={{ paddingLeft: 10, flexDirection: "column" }}>
                    <Text
                      style={{
                        color: "#426EF0",
                        fontSize: 15,
                        fontWeight: "medium",
                      }}
                    >
                      Member Date
                    </Text>
                    <Text
                      style={{
                        color: "#426EF0",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      22-02-2022
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 7,
            top: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.main}>
            <TouchableOpacity onPress={profile} style={styles.square}>
              <Mate name="clipboard-account" style={styles.icon1} />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={event} style={styles.square}>
              <Fo name="calendar-check" style={styles.icon2} />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Event</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.square}>
              <Mate name="qrcode-scan" style={styles.icon3} />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Scan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main1}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                marginTop: 5,
                marginLeft: 10,
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPrbO0lEb7OmtiKhLsY0dRGr80ivlvE0ziCaixuXR632HoOl5ONhycJbcnb88MMpCDxU&usqp=CAU",
              }}
            />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Leaderboard
            </Text>
            <TouchableOpacity style={{ width: 180 }} onPress={add}>
              <Ion
                style={{ textAlign: "right" }}
                size={30}
                name="add-outline"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            keyExtractor={(member) => member.id}
            data={member.members}
            renderItem={ListMember}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#426ef0",
    margin: 0,
  },
  scrollView: {
    backgroundColor: "white",
  },
  header: {
    // flex:2,
    height: 170,
    backgroundColor: "#426ef0",
    width: "100%",
    padding: 20,
  },
  head: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#426ef0",
    height: 100,
    width: 100,
    marginRight: 20,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  infoBar: {
    flexDirection: "row",
    // backgroundColor: "black",
  },
  info: {
    // height: '40%',
    paddingTop: 30,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    width: "100%",
    flexWrap: "wrap",
    paddingTop: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },

  role: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "medium",
    fontSize: 20,
    color: "white",
  },
  show: {
    top: 10,
    flexDirection: "row",
    padding: 20,
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
    width: 180,
    height: 60,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  showWindow1: {
    width: 180,
    height: 60,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  window1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  window2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: 370,
    height: 120,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    flexDirection: "row",
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
    width: 370,
    height: 60,
    // borderRadius: 8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  main2: {
    // marginTop: 20,
    width: 370,
    height: "100%",
    // borderRadius: 8,
    backgroundColor: "white",
    // shadowColor: '#000',
    // shadowOffset: { width: -2, height: 3 },
    // shadowOpacity: 0.2,
    // shadowRadius: 8,
  },
  member: {
    borderRadius: 15,
    width: 370,
    backgroundColor: "white",
    // shadowColor: '#000',
    // shadowOffset: { width: 5, height: 0 },
    // shadowOpacity: 0.1,
    // shadowRadius: 7,

    //new
    // shadowColor: '#000',
    // shadowOffset: { width: -1, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 1,
  },
  mem: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    height: 80,
    borderBottomColor: "#EFF3FF",
  },
  imgMem: {
    width: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  avaMem: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 5,
    marginLeft: 5,
    objectFit: "cover",
    imageRendering: "pixelated",
  },
  roleImg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    objectFit: "cover",
    imageRendering: "pixelated",
  },
  nameMem: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    marginLeft: 10,
    flexWrap: "wrap",
  },
  point: {
    textAlign: "right",
    width: "45%",
  },
  txtPoint: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF6A62",
  },
});
