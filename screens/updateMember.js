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
import * as memberAction from "../redux/actions/memberAction";

import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import BackButton from "../components/BackButton";

const UpdateMember = ({ route, navigation }) => {
  const [selectedImage, setSelectedImage] = useState({
    localUri:
      "https://firebasestorage.googleapis.com/v0/b/mobile-520b1.appspot.com/o/12112.png?alt=media&token=fc42e0f2-3c2e-48f9-8cd6-8cb5b10e7f5c",
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

  const member = route.params.member;
  const id = route.params.id;
  console.log("member: ", member);
  const[email, setEmail] = useState(member.email)
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [photoURL, setPhotoURL] = useState(member.url);
  const [currentPoint, setCurrentPoint] = useState(member.currentPoint);
  const [dob, setDob] = useState(member.dob);
  const [createdAt, setCreatedAt] = useState(member.createAdd);

  let timestamp = new Date().toUTCString();
  const updateMember = () => {
    const member = {
      id: id,
      email: email,
      name: name,
      role: role,
      url: photoURL,
      currentPoint: currentPoint,
      dob: dob,
      createdAt: createdAt,
    };
    dispatch(memberAction.fetchUpdate(member));
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.title}>Update Member</Text>
      <Image
        style={styles.image}
        source={{
          uri: photoURL,
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
            value={name}
            onChangeText={(value) => setName(value)}
          />
           <TextInput
            style={styles.InputText}
            placeholder="Email"
            value={name}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Role"
            value={role}
            onChangeText={(value) => setRole(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Current Point"
            value={currentPoint}
            onChangeText={(value) => setCurrentPoint(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Date of Birth"
            value={dob}
            onChangeText={(value) => setDob(value)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateMember()}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UpdateMember;

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
