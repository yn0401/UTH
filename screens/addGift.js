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

const addGift = () => {
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

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [currentPoint, setCurrentPoint] = useState(0);
  const [dob, setDob] = useState("");
  const [createAdd, setCreateAdd] = useState("");

  let timestamp = new Date().getDate();
  const addMember = () => {
    const member = {
      name: name,
      role: role,
      url: photoURL,
      currentPoint: currentPoint,
      dob: dob,
      createAdd: timestamp,
    };
    // console.log(member.url);
    dispatch(memberAction.fetchAddNew(member));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Member</Text>
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
            // value={value}
            onChangeText={(value) => setName(value)}
            // underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.InputText}
            placeholder="Role"
            // value={value}
            onChangeText={(value) => setRole(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Current Point"
            // value={value}
            onChangeText={(value) => setCurrentPoint(value)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Date of Birth"
            // value={value}
            onChangeText={(value) => setDob(value)}
          />
          <TouchableOpacity style={styles.button} onPress={() => addMember()}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default addGift;

const styles = StyleSheet.create({});
