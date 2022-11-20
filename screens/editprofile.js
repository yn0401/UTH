import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View, SafeAreaView, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";
import LoginScreen from "./login";
import SelectDropdown from 'react-native-select-dropdown'

const sex = ["Nam", "Nữ", "Giới tính khác"]

const EditProfileScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.head}>
                        <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold', }}>Account</Text>
                        <View style={{ marginLeft: 0, flexDirection: 'row' }}>
                            <View style={styles.square1} >
                            </View>
                            <View style={styles.square1} >
                            </View>
                            <View style={styles.square1} >
                            </View>
                            <View style={styles.square1} >
                                <TouchableOpacity style={styles.btnNoti}>
                                    <Ion name="notifications" style={styles.iconNoti} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6iPDSqcgCcAtdEz_rPY0B-sxqMd7hz0Hlg&usqp=CAU",
                            }}
                        />

                    </View>
                    <TouchableOpacity style={styles.btnEdit}>
                        <Fo name="pen" style={styles.iconEdit} />
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.editName}>
                        <View style={styles.icon}>
                            <Fo name="user" style={styles.icon1} />
                        </View>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 12, }}>Tên *</Text>
                            <TextInput placeholder="Nhập tên đầy đủ của bạn" style={styles.txtName} />
                        </View>
                    </View>

                    <View style={styles.editName}>
                        <View style={styles.icon}>
                            <Mat name="email" style={styles.icon1} />
                        </View>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 12, }}>Email</Text>
                            <TextInput placeholder="Nhập email của bạn" style={styles.txtName} />
                        </View>
                    </View>

                    <View style={styles.editName}>
                        <View style={styles.icon}>
                            <Mat name="email" style={styles.icon1} />
                        </View>
                        <View style={styles.name}>
                            <Text style={{ fontSize: 12, }}>Giới tính</Text>
                            <SelectDropdown
                                style={{width: 280}}
                                data={sex}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#426ef0",
    },
    scrollView: {
        backgroundColor: 'white',
    },
    header: {
        height: 180,
        backgroundColor: "#426ef0",
        width: "100%",
        paddingTop: 120,
        alignItems: "center",
        textAlign: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 7,
        width: '100%',
        paddingTop: 100
    },
    head: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#426ef0',
        flexDirection: 'row',
        alignItems: "center",
        textAlign: 'center',
        justifyContent: 'center',
    },
    square1: {
        backgroundColor: "#426ef0",
        flexDirection: 'row',
        width: 50,
        height: 50,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center",
    },
    btnNoti: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
    iconNoti: {
        color: "#426ef0",
        fontSize: 25,
        fontWeight: "bold",
        width: "100%",
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    btnEdit: {
        height: 40,
        width: 40,
        top: -120,
        left: 110,
        borderRadius: 40 / 2,
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center"
    },
    iconEdit: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        width: "100%",
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 180,
        width: 180,
        borderRadius: 180 / 2,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: "center"
    },
    editName: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        fontSize: 20,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30 / 2,
        borderWidth: 2,
        color: '#426ef0',
        borderColor: '#426ef0'
    },
    icon1: {
        fontSize: 15,
        color: '#426ef0',
    },
    imgCard: {
        margin: 20,
        height: 250,
        width: 390,
        justifyContent: "center"
    },
    avatar: {
        justifyContent: "center",
        alignItems: "center",
        width: 205,
        height: 205,
        backgroundColor: '#426ef0',
        justifyContent: "center",
        borderRadius: 205 / 2
    },
    name: {
        flexDirection: 'column',
        paddingLeft: 15,
    },
    txtName: {
        marginTop: 10,
        paddingBottom: 5,
        fontSize: 15,
        width: 280,
        color: '#CCCCCC',
        borderBottomWidth: 1,
        borderColor: '#CCCCCC'
    },
    txtMem: {
        top: -250,
        left: 150,
        fontSize: 25,
        width: 170,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        textAlign: 'right',
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 4,

    },
    txtNumber: {
        top: -240,
        fontSize: 25,
        left: -10,
        width: 300,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        letterSpacing: 5,
    },
    txtNamee: {
        top: -225,
        left: -10,
        fontSize: 16,
        width: 300,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.9,
        letterSpacing: 3,

    },
    row: {
        flexDirection: 'row',

    },
    colunm: {
        flexDirection: 'column',
        width: 100,
        left: -10,
    },
    colunm1: {
        flexDirection: 'column',
        width: 100,
        left: 150,
    },
    txtRole: {
        top: -220,
        left: -10,
        fontSize: 10,
        width: 300,
        fontWeight: 'bold',
        color: 'white',
        flexWrap: 'wrap',
        letterSpacing: 1,
    },
    txtBalance: {
        top: -210,
        fontSize: 10,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        letterSpacing: 1,
    },

    txtValid: {
        top: -210,

        fontSize: 10,
        width: 80,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        letterSpacing: 1,
    },
    txtCoin: {
        top: -210,
        fontSize: 25,
        width: 150,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        letterSpacing: 1,
    },
    txtDay: {
        top: -210,
        fontSize: 20,
        width: 60,
        fontWeight: 'medium',
        color: 'white',
        flexWrap: 'wrap',
        letterSpacing: 1,
    },
    intro: {
        top: -170,
        padding: 10,
        height: 260,
        width: 340,
        borderRadius: 30,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    txtIntro: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txtIntro1: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    point: {
        fontSize: 36,
        marginTop: 50,
        marginBottom: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txtThanks: {
        fontSize: 14,
    },
    signout: {
        top: -170,
        marginTop: 40,
        padding: 10,
        height: 60,
        width: 340,
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    txtSignout: {
        fontSize: 15,
        width: 280,
        fontWeight: 'bold',
    },

});
