import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, SafeAreaView, TextInput } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { getStorage, uploadString, ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { firebase } from '../config/firebase';

const AddScreen = ({ params, }) => {
    const [name, setName] = useState('');
    const [IconGift, setIconGift] = useState('');
    const [ColorIcon, setColorIcon] = useState('');
    const [IconFire, setIconFire] = useState('');
    const [ColorIconFire, setColorIconFire] = useState('');
    const [Point, setInputPoint] = useState(0);
    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!IconGift.trim()) {
            alert('Please Enter Email');
            return;
        }
        if (!ColorIcon.trim()) {
            alert('Please Enter Email');
            return;
        }
        if (!IconFire.trim()) {
            alert('Please Enter Email');
            return;
        }
        if (!ColorIconFire.trim()) {
            alert('Please Enter Email');
            return;
        }
        if (!Point.trim()) {
            alert('Please Enter Email');
            return;
        }

        //Checked Successfully
        //Do whatever you want
        alert('Success');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Gift</Text>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://dep.com.vn/wp-content/uploads/2019/01/BLACKPINK-Lisa-New-Instagram-Profile-Picture-November-2018.jpg',
                }}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Pick Image</Text>
            </TouchableOpacity>
            <SafeAreaView>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >

                    <TextInput
                        style={styles.InputText}
                        placeholder="Name Gift"
                    // value={value}
                        onChangeText={
                        (value) => setName(value)
                      }
                      underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Icon Gift"
                    // value={value}
                    onChangeText={
                        (value) => setIconGift(value)
                      }
                    />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Color Icon Gift"
                    // value={value}
                    onChangeText={
                        (value) => setColorIcon(value)
                      }
                    />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Icon Fire"
                    // value={value}
                    onChangeText={
                        (value) => setIconFire(value)
                      }
                    />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Color Icon Fire"
                    // value={value}
                    onChangeText={
                        (value) => setColorIconFire(value)
                      }
                    />
                    <TextInput
                        style={styles.InputText}
                        placeholder="Point"
                    // value={value}
                    onChangeText={
                        (value) => setPoint(value)
                      }
                    />
                    <TouchableOpacity  style={styles.button} >
                        <Text style={styles.buttonText}>Add</Text>
                        
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default AddScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
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
        marginBottom: 40,
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
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