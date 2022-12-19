import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Fo from "react-native-vector-icons/FontAwesome5";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthAll } from "../redux/actions/eventAction";

const EventScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const event = useSelector((store) => store.events);

  useEffect(() => {
    dispatch(fecthAll());
    console.log(event);
  }, []);

  const navigate = () => {
    navigation.navigate("ViewAll");
  };

  const info = (id) => {
    navigation.navigate("EventDetail", {
      id: id,
    });
  };

  const add = () => {
    navigation.navigate("AddEvent");
  };

  const ListEvent = ({ item }) => {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={() => info(item.id)} style={styles.event}>
          <Image
            style={styles.imgEvent}
            source={{
              uri: item.photoURL,
            }}
          />
          <Text style={styles.nameEvent}>{item.name}</Text>
          <View style={styles.map}>
            <Fo name="map-marker-alt" style={styles.iconMap} />
            <Text style={styles.txtMap}>{item.location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
        <BackButton goBack={navigation.goBack} />
          <Text style={styles.txt}>Exceeding Event Expectations</Text>

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
            onPress={add}
          >
            <Fo name="plus" style={styles.icon3} />
          </TouchableOpacity>
        </View>

        <FlatList
          keyExtractor={(event) => event.id}
          data={event.events}
          renderItem={ListEvent}
          disableVirtualization={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default EventScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5060ED",
    margin: 0,
  },
  scrollView: {
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#426ef0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    flex: 2,
    marginBottom: 10,
  },
  main: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  txt: {
    width: "85%",
    fontSize: 32,
    marginLeft:10,
    alignItems: "flex-start",
    color: "white",
    fontWeight: "bold",
  },
  imgHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  name: {
    justifyContent: "center",
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  imgAvatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 5,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  txtInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    color: "white",
  },
  imgBackground: {
    width: 300,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 180 / 2,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "white",
    height: 40,
    borderRadius: 5,
    marginBottom: 20,
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: 10,
    height: 25,
    width: 25,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    top: 0,
    borderRadius: 20,
    // justifyContent:'center',
    // alignItems:'center',
    // width: 80,
    // height: 30,
    flexDirection: "row",
    backgroundColor: "#23145b",
    marginRight: 15,
  },
  iconEvent: {
    fontSize: 20,
    color: "white",
  },
  iconMap: {
    fontSize: 15,
    color: "black",
  },
  txtEvent: {
    marginLeft: 10,
    color: "#fff",
  },
  event: {
    justifyContent: "center",
    marginTop: 20,
  },
  imgEvent: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  nameEvent: {
    fontSize: 20,
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginTop: 10,
    marginBottom: 10,
  },
  map: {
    flexDirection: "row",
  },
  txtMap: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
});
