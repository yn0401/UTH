import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, TextInput, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";
const EventScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.imgHeader}>
                        <Image style={styles.imgAvatar}
                            source={{
                                uri: "https://dep.com.vn/wp-content/uploads/2019/01/BLACKPINK-Lisa-New-Instagram-Profile-Picture-November-2018.jpg",
                            }}
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <Fo name="search" size={20} style={styles.imageStyle} />
                        <TextInput
                            style={{ flex: 1, color: 'white' }}
                            placeholder="Search . . ."
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.btn}
                        >
                        <Fo name='music' style={styles.iconEvent} />
                        <Text style={styles.txtEvent}>
                            Music
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        style={styles.btn}
                        >
                        <Fo name='tv' style={styles.iconEvent} />
                        <Text style={styles.txtEvent}>
                            IT
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        >
                        <Fo name='server' style={styles.iconEvent} />
                        <Text style={styles.txtEvent}>
                            Blockchain
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={{color: '#808080', marginBottom: 20}}>This Weekend</Text>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://dep.com.vn/wp-content/uploads/2019/01/BLACKPINK-Lisa-New-Instagram-Profile-Picture-November-2018.jpg",
                            }}
                        />       
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}
    ;

export default EventScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5060ED",
        margin: 0,
    },
    scrollView: {
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 20,
        flex: 2,

    },
    main:{
        margin: 20
    },
    imgHeader: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    name: {
        justifyContent: 'center',
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    },
    imgAvatar: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: "5px",
        marginBottom: 20
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitle: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    txtInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
    },
    imgBackground: {
        width: 300,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 180 / 2
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'white',
        height: 40,
        borderRadius: 5,
        marginBottom: 20,
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        margin: 10,
        height: 25,
        width: 25,
        alignItems: 'center',
    },
    button:{
        flexDirection: 'row',
    },
    btn:{
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 20,
        // justifyContent:'center',
        // alignItems:'center',
        // width: 80,
        // height: 30,
        flexDirection: 'row', 
        backgroundColor: '#FF6A62',
        marginLeft: 15,
    },
    iconEvent:{
        fontSize: 20,
        color:'white'
    },
    txtEvent:{
        marginLeft: 10, 
        color: '#fff', 
    },
    imgEvent:{

    },
});