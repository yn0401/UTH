import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";

const GiftScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.main}>
                        <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold' }}>Gift</Text>
                        <View style={{ marginLeft: 130, flexDirection: 'row' }}>
                            <View style={styles.square1} >
                                <TouchableOpacity style={{ marginLeft: 10, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: 'white', textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                    <Fo name="shopping-basket" style={styles.icon3} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.square1} >
                                <TouchableOpacity style={{ marginLeft: 10, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: 'white', textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                    <Fo name="location-arrow" style={styles.icon3} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.square1} >
                                <TouchableOpacity style={{ marginLeft: 10, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: 'white', textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                    <Ion name="notifications" style={styles.icon3} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={{ marginTop: 20, marginLeft: 20, marginBottom: 3, fontSize: 20, color: '#888888', fontWeight: 'bold' }}>Remaining Point</Text>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ marginLeft: 20, width: '30%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#426ef0' }}>1253544</Text>
                        </View>
                        <View style={{ textAlign: 'right', width: '60%' }}>
                            <Text style={{ textAlign: 'right',fontWeight: 'bold', fontSize: 16, color: '#426ef0' }}>Select Type</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText1}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText2}>Latest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn3}>
                            <Text style={styles.btnText3}>Hot</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn4}>
                            <Text style={styles.btnText4}>Used</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: "center", }}>
                        <View style={{ marginTop: 20, flexDirection: 'row', width: '100%' }}>
                            <View style={{ marginLeft: 30, width: '50%' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Filter(P)</Text>
                            </View>
                            <View style={{ textAlign: 'right', width: '30%', flexDirection: 'row' }}>
                                <Fo name="arrow-alt-circle-down" style={styles.icon} />
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>DSC</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", margin: 20, }}>
                        <View style={styles.gift}>
                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Foun name="shopping-bag"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Salary</Text>
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>4365P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Mate name="bag-personal"
                                        style={{
                                            color: "#502E9C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ opacity: 0.3, fontWeight: 'bold', fontSize: 16, color: 'black' }}>BackPack (Sold Out)</Text>
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>99P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Ion name="logo-youtube"
                                        style={{
                                            color: "#FC0D1B",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Youtube Premium</Text>
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>18P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Mate name="desktop-mac"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Macbook Pro 2022</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>17P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Icon name="feed-star"
                                        style={{
                                            color: "#66CC66",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ flexWrap: 'wrap', opacity: 0.3, fontWeight: 'bold', fontSize: 16, color: 'black' }}>Starbucks (Sold Out)</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                            opacity: 0.3
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>15P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Fo name="birthday-cake"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Teramisu</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>9P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Fo name="birthday-cake"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Teramisu</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>9P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Fo name="birthday-cake"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Teramisu</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>9P</Text>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '80%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Fo name="birthday-cake"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Teramisu</Text>
                                    <Mate name="fire"
                                        style={{
                                            color: "#FF0000",
                                            fontSize: 25,
                                            marginLeft: 10,
                                            fontWeight: "bold",
                                            width: "20%",
                                        }} />
                                </View>
                                <View style={{ textAlign: 'right', width: '15%' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#FF6A62' }}>9P</Text>
                                </View>
                            </View>


                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};
export default GiftScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#426ef0",
    },
    scrollView: {
        backgroundColor: 'white',
    },
    header: {
        height: 135,
        backgroundColor: "#426ef0",
        width: "100%",
        alignItems: "center",
    },
    showWindow: {
        flexDirection: "row",
    },
    infoBar: {
        width: "100%",
    },
    content: {
        flex: 7,
        top: -28,
        backgroundColor: 'white',
        width: "100%",
        borderTopRightRadius: '30px 30px',
        borderTopLeftRadius: '30px 30px',

    },
    avatar: {
        backgroundColor: "#fff",
        height: 100,
        width: 100,
        borderRadius: 100,
        marginRight: 20,
    },
    info: {
        // width: "100%",
    },
    name: {
        fontSize: 20,
        backgroundColor: "#426ef0",
        color: "#fff",
        fontWeight: "bold",
    },
    role: {
        fontSize: 15,
        backgroundColor: "#426ef0",
        color: "#fff",
    },
    window: {
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    icon: {
        color: "#426ef0",
        fontSize: 25,
        fontWeight: "bold",
        width: "100%",
        textAlign:'right',
      
    },
    icon1: {
        color: "#426EF0",
        fontSize: 30,
        fontWeight: "bold",
        width: "30%",
    },
    icon2: {
        color: "#F96262",
        fontSize: 30,
        fontWeight: "bold",
        width: "30%",
    },
    icon3: {
        color: "#426ef0",
        fontSize: 25,
        fontWeight: "bold",
        width: "100%",
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    icon4: {
        color: "#426ef0",
        fontSize: 25,
        fontWeight: "bold",
        width: "20%",
    },
    main: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#426ef0',
        flexDirection: 'row',
        marginTop: 20,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    square: {
        backgroundColor: "#426ef0",
        width: 50,
        height: 50,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center",
    },
    square1: {
        backgroundColor: "#426ef0",
        flexDirection: 'row',
        width: 50,
        height: 50,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center",
    },
    main1: {
        marginTop: 20,
        width: 351,
        height: 60,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },

    main2: {
        marginTop: 20,
        width: 351,
        height: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    button: {
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
        paddingLeft:30,
    },
    btn1: {
        alignItem: 'center',
        justifyContent: 'center',
        height: 40,
        width: 80,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: -4, height: -4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    btn2: {
        alignItem: 'center',
        justifyContent: 'center',
        opacity: 0.6,
        height: 40,
        width: 113,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    btn3: {
        alignItem: 'center',
        justifyContent: 'center',
        opacity: 0.6,
        height: 40,
        width: 70,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    btn4: {
        alignItem: 'center',
        justifyContent: 'center',
        opacity: 0.6,
        height: 40,
        width: 70,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
    },
    btnText1: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#426EF0',
        fontWeight: 'bold',
    },
    btnText2: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#7AD187'
    },
    btnText3: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#FF6A62'
    },
    btnText4: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#800080'
    },
    gift: {
        borderRadius: 15,
        width: 370,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    }
});
