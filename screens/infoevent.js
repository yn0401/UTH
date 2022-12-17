import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

import { fecthByID } from "../redux/actions/eventAction";

const InfoEventScreen = ({ route, navigation }) => {
  const id = route.params.id;

  let store = useSelector((store) => store.events.event);

  const [item, setItem] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthByID(id));
  }, [dispatch]);

  useEffect(() => {
    setItem(store);
    console.log("store", store);
  }, [store]);


  const navigate = () => {
    navigation.navigate("ViewAll");
  };

  return (
    <View style={styles.container1} key={item.id}>
      <View style={styles.view1}>
        <View style={styles.view2} />
        <View style={styles.view3} />
        <Image
          style={styles.imgEvent}
          source={{
            uri: item.imageURL,
          }}
        />
        <Text style={styles.nameEvent}>{item.name}</Text>
        <Text style={styles.txtMap}>Địa điểm</Text>
        <Text style={styles.txtMap1}>{item.location}</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.date}>Date</Text>
            {/* <Text style={styles.date1}>{(item.eventTime).toString()}</Text> */}
          </View>
          <View style={{ flexDirection: "column", width: "50%" }}>
            <Text style={styles.time}>Time</Text>
            {/* <Text style={styles.time1}>{item.eventTime}</Text> */}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.checkin}>
        <Text style={styles.txtcheckin}>Check In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InfoEventScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "white",
  },
  text1: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  view1: {
    paddingLeft: 30,
    paddingRight: 30,
    marginLeft: 30,
    marginRight: 30,
    width: "100%",
    height: 650,
    backgroundColor: "#426ef0",
    borderRadius: 8,

    // borderStyle: 'dashed',
    borderColor: "#555555",
    borderTopColor: "white",
    justifyContent: "center",
  },
  view2: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    left: -25,
    top: 300,
    backgroundColor: "white",
  },
  view3: {
    position: "absolute",
    right: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    top: 300,
    backgroundColor: "white",
  },
  imgEvent: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  nameEvent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    marginTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  txtMap: {
    marginTop: 20,
    fontSize: 13,
    // fontWeight:'bold',
    color: "white",
    // textDecorationLine: 'underline',
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsi",
    whiteSpace: "nowrap",
  },
  txtMap1: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    // textDecorationLine: 'underline',
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  img: {
    width: 30,
    height: 30,
  },
  checkin: {
    marginTop: 20,
    padding: 10,
    height: 50,
    width: 230,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#426ef0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  txtcheckin: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  date: {
    fontSize: 13,
    color: "white",
  },
  date1: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    color: "white",
  },
  time1: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
