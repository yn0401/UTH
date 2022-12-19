import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthByID, fecthDelete } from "../redux/actions/giftAction";
import * as transactionAction from "../redux/actions/transactionAction";
import BackButton from "../components/BackButton";

const DetailGift = ({ route, navigation }) => {
  const [item, setItem] = useState({});

  const id = route.params.id;

  let store = useSelector((store) => store.gifts.gift);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthByID(id));
  }, [dispatch]);

  useEffect(() => {
    setItem(store);
  }, [store]);

  const deleteGift = (id) => {
    dispatch(fecthDelete(id));
  };

  const navigateUpdate = () => {
    navigation.navigate("UpdateGift", { gift: item, id: id });
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [point, setPoint] = useState(0);
  const [quantity, setQuantity] = useState(0);

  let timestamp = new Date().toUTCString();
  const addTransaction = () => {
    const transaction = {
      name: item.name,
      description: item.description,
      photoURL: item.photoURL,
      point: item.point,
      quantity: item.quantity,
      createAdd: timestamp,
    };
    dispatch(transactionAction.fecthAddNew(transaction));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
      <BackButton goBack={navigation.goBack} />
        <Image
          style={styles.image}
          source={{
            uri: item.photoURL,
          }}
        />
        <View style={styles.info}>
          <View style={styles.info1}>
            <Text style={styles.product}>Product</Text>
            <View style={styles.new}>
              <Text
                style={{
                  color: "white",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                New
              </Text>
            </View>
          </View>
          <Text style={styles.name}>{item.name}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.point}>Point: {item.point}P</Text>
            <Text style={styles.point}>Stock: {item.quantity}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
            Description
          </Text>
          <Text style={styles.txtDes}>{item.description}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigateUpdate(id)} style={styles.btn}>
          <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => deleteGift(id)} style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => addTransaction()} style={styles.btn}>
          <Text style={styles.btnText}>Exchange</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailGift;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  main: {},
  txtSize: {
    fontSize: 14,
    fontWeight: "bold",
    paddingTop: 20,
  },
  txtDes: {
    fontSize: 14,
    marginTop: 10,
  },
  sizeActive: {
    fontSize: 17,
    fontWeight: "bold",
  },
  viewSize: {
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 15,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
  },
  info: {
    marginTop: 20,
  },
  info1: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
  },
  new: {
    width: 55,
    height: 20,
    backgroundColor: "black",
    borderRadius: 5,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  point: {
    fontSize: 16,
    fontWeight: "600",
  },
  search: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    border: "1px solid #ccc",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  color: {
    paddingTop: 20,
  },

  row: {
    flexDirection: "row",
    paddingTop: 20,
  },
  rowImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 10,
    resizeMode: "contain",
  },
  footer: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#222b45",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
