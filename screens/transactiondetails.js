import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";

const TransactionDetailsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container1}>
                    <BackButton goBack={navigation.goBack}/>
                    <Text style={styles.text1}>Chi tiết giao dịch</Text>
                    <View style={styles.view1}>
                        <View style={styles.view2}
                        />
                        <View style={styles.view3}
                        />
                        <View style={styles.logo}>
                            <Ion name="logo-youtube"
                                color="#FC0D1B"
                                style={styles.iconLogo} />
                            <Text style={styles.nameGift}>Youtube Premium</Text>
                            <Text style={styles.point}>99 P</Text>
                        </View>

                        <View style={styles.view4}>
                            <View style={styles.view5}>
                                <Text style={styles.name}>Name</Text>
                                <Text style={styles.name}>Amount</Text>
                            </View>
                            <View style={styles.view6}>
                                <Text style={styles.name1}>Nhi Rose</Text>
                                <Text style={styles.name1}>1</Text>

                            </View>
                        </View>

                    </View>
                    <View style={styles.view7}>
                        {/* <View style={styles.view2}
                        />
                        <View style={styles.view3}
                        /> */}
                        <View style={styles.view10}>
                            <View style={styles.view8}>
                                <Image
                                    style={styles.img}
                                    source={{
                                        uri: "http://remhoanggia.com/wp-content/uploads/2017/06/icon-tiet-kiem-chi-phi.png",
                                    }}
                                />
                            </View>
                            <View style={styles.view9}>
                                <Text style={styles.name2}>Số dư</Text>
                                <Text style={styles.name3}>100 P</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.view7}>
                        <View style={styles.view11}>
                            <View style={styles.view5}>
                                <Text style={styles.nameTotal}>Total</Text>
                            </View>
                            <View style={styles.view6}>
                                <Text style={styles.total}>99 P</Text>

                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.giaodich}
                        >
                        <Text style={styles.txtGiaodich}>Xác nhận giao dịch</Text>
                       
                    </TouchableOpacity>
                </View>    
            </ScrollView>
        </SafeAreaView>
    )
};

export default TransactionDetailsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: 'white',
    },
    text1: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    view1: {
        paddingLeft: 30,
        paddingRight: 30,
        marginLeft: 30,
        marginRight: 30,
        width: 350,
        height: 200,
        backgroundColor: "#F2F3FC",
        borderRadius: 8,
        borderBottomWidth: 1,
        // borderStyle: 'dashed',
        borderColor: '#555555',
        borderTopColor: 'white',
        justifyContent: 'center'
    },
    view2: {
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 25,
        left: -25,
        top: 70,
        backgroundColor: "white",
    },
    view3: {
        position: "absolute",
        right: -25,
        width: 50,
        height: 50,
        borderRadius: 25,
        top: 70,
        backgroundColor: "white",
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view5: {
        flexDirection: 'column',
        width: '40%',
    },
    view6: {
        flexDirection: 'column',
        width: '55%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    view7: {
        paddingLeft: 30,
        paddingRight: 30,
        marginLeft: 30,
        marginRight: 30,
        width: 350,
        height: 80,
        backgroundColor: "#F2F3FC",
        borderRadius: 8,
        borderBottomWidth: 1,
        // borderStyle: 'dashed',
        borderColor: '#555555',
        borderTopColor: 'white',
        justifyContent: 'center'
    },
    view8: {
        flexDirection: 'column',
        width: '10%',
        justifyContent: 'center',
    },
    view9: {
        flexDirection: 'column',
        width: '55%',
        marginLeft: 10,
        justifyContent: 'center',
    },
    view10: {
        flexDirection: 'row',
    },
    view11: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        marginBottom: 15,
        fontSize: 15,
        color: '#AAAAAA',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    name1: {
        fontSize: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name2: {
        fontSize: 13,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    name3: {
        fontSize: 15,
        justifyContent: 'center'
    },
    nameTotal: {
        fontSize: 15,
        color: '#AAAAAA',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    total: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 10,
    },
    iconLogo: {
        fontSize: 25,
        fontWeight: "bold",
        width: "13%",
    },
    nameGift: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    point: {
        color: '#FF6A62',
        fontSize: 16,
        fontWeight: 'bold',
    },
    img: {
        width: 30,
        height: 30
    },
    giaodich: {
        marginTop: 40,
        padding: 10,
        height: 50,
        width: 230,
        alignItems: "center",
        textAlign:'center',
        justifyContent:'center',
        borderRadius: 20,
        backgroundColor: '#426ef0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    txtGiaodich: {
        fontSize: 15,
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bold',
    },
});