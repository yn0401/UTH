import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";

const HistoryScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.main}>
                        <Text style={{ color: 'white', fontSize: 34, fontWeight: 'bold' }}>Transactions</Text>
                        <View style={{ marginLeft: 0, flexDirection: 'row' }}>
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
                </View>
                <View style={styles.content}>
                    <View style={{ marginTop: 30, flexDirection: 'row', width: '100%' }}>
                        <View style={{ marginLeft: 35, width: '30%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Recent</Text>
                        </View>
                        <View style={{ textAlign: 'right', width: '55%' }}>
                            <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 16, color: '#426ef0' }}>Select Time</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btnText1}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.btnText2}>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn3}>
                            <Text style={styles.btnText3}>Expense</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtToday}>Today</Text>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <View style={styles.gift}>
                            <View style={styles.gift1}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Foun name="shopping-bag"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftActive}>Salary</Text>
                                        <Text style={styles.role}>MemberCard</Text>
                                    </View>

                                </View>


                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.point}>-15P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Mate name="bag-personal"
                                        style={{
                                            color: "#502E9C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftNotActive}>BackPack (Sold Out)</Text>
                                        <Text style={styles.role}>Admin</Text>
                                    </View>
                                </View>
                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.point}>-19P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Ion name="logo-youtube"
                                        style={{
                                            color: "#FC0D1B",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftActive}>Youtube Premium</Text>
                                        <Text style={styles.role}>ATC Card</Text>
                                    </View>
                                </View>
                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.point}>-15P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                    <Text style={styles.txtYesterday}>Yesterday</Text>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <View style={styles.gift}>
                            <View style={styles.gift1}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Foun name="shopping-bag"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftActive}>Salary</Text>
                                        <Text style={styles.role}>MemberCard</Text>
                                    </View>

                                </View>


                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.pointPlus}>+4055P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Mate name="bag-personal"
                                        style={{
                                            color: "#502E9C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftNotActive}>BackPack (Sold Out)</Text>
                                        <Text style={styles.role}>Admin</Text>
                                    </View>
                                </View>
                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.point}>-19P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 2, height: 80, borderBottomColor: '#EFF3FF' }}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Ion name="logo-youtube"
                                        style={{
                                            color: "#FC0D1B",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftActive}>Youtube Premium</Text>
                                        <Text style={styles.role}>ATC Card</Text>
                                    </View>
                                </View>
                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.pointPlus}>+155P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.txtTime}>12 December 2021</Text>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <View style={styles.gift}>
                            <View style={styles.gift1}>
                                <View style={{ width: '70%', alignItems: 'center', flexDirection: 'row' }}>
                                    <Foun name="shopping-bag"
                                        style={{
                                            color: "#2F498C",
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            width: "13%",
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.txtGiftActive}>Salary</Text>
                                        <Text style={styles.role}>MemberCard</Text>
                                    </View>

                                </View>


                                <View style={{ textAlign: 'right', width: '25%' }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.pointPlus}>+4055P</Text>
                                        <Text style={styles.time}>8:48 AM</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HistoryScreen;

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
        fontSize: 11,
        color: "#B0BFE8",
    },
    window: {
        width: 100,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
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

    main: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#426ef0',
        flexDirection: 'row',
        margin: 20,
        marginLeft: 20,
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
        justifyContent: 'center',
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
    txtToday:{
        marginLeft: 35, 
        marginTop: 20, 
        fontWeight: 'bold', 
        fontSize: 16, 
        color: 'black' 
    },
    txtYesterday:{
        marginLeft: 35, 
        fontWeight: 'bold', 
        fontSize: 16, 
        color: 'black' 
    },
    txtTime:{
        marginLeft: 35, 
        marginTop:30,
        fontWeight: 'bold', 
        fontSize: 16, 
        color: 'black' 
    },
    gift: {
        borderRadius: 15,
        width: 370,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    },
    gift1: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        height: 80,
        borderBottomColor: '#EFF3FF'
    },
    txtGiftActive: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        flexWrap: 'wrap'
    },
    txtGiftNotActive: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        opacity: 0.3,
    },
    time: {
        fontSize: 11,
        color: "#B0BFE8",
        textAlign: 'right'
    },
    point: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FF6A62'
    },
    pointPlus: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#7AD187'
    },
});
