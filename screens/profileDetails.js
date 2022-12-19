import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchByID, fetchDelete } from "../redux/actions/memberAction";
import BackButton from "../components/BackButton";

const DetailProfile = ({ route, navigation }) => {
  const navigate = () => {
    navigation.navigate("ViewAll");
  };

  const [item, setItem] = useState({});

  const id = route.params.id;

  let store = useSelector((store) => store.members.member);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByID(id));
  }, [dispatch]);

  useEffect(() => {
    setItem(store);
  }, [store]);

  const deleteMember = (id) => {
    dispatch(fetchDelete(id));
  };

  const navigateUpdate = () => {
    navigation.navigate("UpdateMember", { member: item, id: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} key={item.id}>
        <View style={styles.header}>
          <BackButton goBack={navigation.goBack} />
          <View style={styles.avatar}>
            <Image
              style={styles.img}
              source={{
                uri: item.url,
              }}
            />
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.txtName}>Hi, {item.name}</Text>
          <View style={styles.infoCard}>
            <Text style={styles.txtRole}>Role : {item.role}</Text>
            <Text style={styles.txtPoint}>
              Current Point: {item.currentPoint} P
            </Text>
            <Text style={styles.txtDoB}>Date of Birth: {item.dob}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigateUpdate(id)}
            style={styles.button}
          >
            <Text style={styles.txtButton}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteMember(id)}
            style={styles.button}
          >
            <Text style={styles.txtButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailProfile;

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
    fontSize: 30,
    fontWeight: "bold",
  },
  infoCard: {
    width: 350,
    height: 180,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  txtRole: {
    fontSize: 22,
    fontWeight: "600",
  },
  txtPoint: {
    fontSize: 22,
    fontWeight: "600",
  },
  txtDoB: {
    fontSize: 22,
    fontWeight: "600",
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    backgroundColor: "#426ef0",
    margin: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
  },
  txtButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
