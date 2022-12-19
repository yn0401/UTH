import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { useDispatch } from "react-redux";
import * as eventAction from "../redux/actions/eventAction";

import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import BackButton from "../components/BackButton";

const AddEvent = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState({
    localUri:
      "https://firebasestorage.googleapis.com/v0/b/uthood-87d4e.appspot.com/o/12112.png?alt=media&token=2d92592b-a3fd-433c-bcfa-e4db34aa165b",
  });

  const openImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });
    console.log("result: ", result);
    if (result.cancelled) return;
    let uri = result.uri;
    setSelectedImage({ localUri: result.uri });

    if (Platform.OS === "web") {
      let base64code = result.base64;
      await uploadBase64(base64code);
    } else {
      let uri = result.uri;
      console.log("uri: ", uri);
      const blobFile = await convertURIToBlob(uri);
      await uploadFile(blobFile);
    }
  };

  const convertURIToBlob = async (uri) => {
    const response = await new Promise((resolve, reject) => {
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.onload = function () {
        resolve(xmlRequest.response);
      };
      xmlRequest.onerror = function () {
        reject(new TypeError("Request failed"));
      };

      xmlRequest.responseType = "blob";
      xmlRequest.open("GET", uri, true);
      xmlRequest.send(null);
    });
    return response;
  };

  const uploadFile = async (blobFile) => {
    let imgName = "img-ios" + new Date().getTime();
    const storage = getStorage();
    const storageRef = ref(storage, `images/${imgName}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = uploadBytesResumable(storageRef, blobFile, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File IOS available at", downloadURL);
          setPhotoURL(downloadURL);
        });
      }
    );
  };

  const uploadBase64 = async (base64code) => {
    let imgName = "img-w" + new Date().getTime();
    //step 2
    const storage = getStorage();
    const storageRef = ref(storage, `images/${imgName}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
    };
    uploadString(storageRef, base64code, "base64", metadata).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File Web available at", downloadURL);
          setPhotoURL(downloadURL);
        });
      }
    );
  };

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [point, setPoint] = useState(0);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  //   let timestamp = new Date().toUTCString();
  const addEvent = () => {
    const event = {
      name: name,
      description: description,
      location: location,
      photoURL: photoURL,
      point: point,
      dateStart: dateStart,
      dateEnd: dateEnd,
    };
    dispatch(eventAction.fecthAddNew(event));
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.title}>Add New Event</Text>
      <Image
        style={styles.image}
        source={{
          uri: selectedImage.localUri,
        }}
      />
      <TouchableOpacity style={styles.button} onPress={openImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.InputText}
            placeholder="Name"
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Description"
            onChangeText={(value) => setDescription(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Location"
            onChangeText={(value) => setLocation(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Point"
            onChangeText={(value) => setPoint(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Start Date"
            onChangeText={(value) => setDateStart(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="End Date"
            onChangeText={(value) => setDateEnd(value)}
          />
          <TouchableOpacity style={styles.button} onPress={() => addEvent()}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  button: {
    backgroundColor: "#426ef0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
  },
  InputText: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
