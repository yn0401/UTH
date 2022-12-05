import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";



const InfoEventScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (

                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <View style={styles.view2}
                        />
                        <View style={styles.view3}
                        />
                        
                        <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/317550139_3405090839706741_6665726607969878686_n.png?stp=dst-png_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHm8mRGrfF4AX-WrVsa&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCArY01TeM2UB2Kx8CEV9_pkBmfzt5NaTClKIJ05Au8Ww&oe=6390800A",
                            }}
                        />  
                        <Text style={styles.nameEvent}>CUỘC THI MOBILE GAME CHALLENGE 2022 MOBILE GAME</Text>
                        <Text style={styles.txtMap}>Địa điểm</Text>
                        <Text style={styles.txtMap1}>Đại Học Hoa Sen</Text>
                        <View style={{flexDirection:'row', marginTop: 15,}}>
                            <View style={{flexDirection:'column', width: '50%'}}>
                                <Text style={styles.date}>Date</Text>
                                <Text style={styles.date1}>1/1/2023</Text>
                            </View>
                            <View style={{flexDirection:'column', width: '50%'}}>
                                <Text style={styles.time}>Time</Text>
                                <Text style={styles.time1}>9h50</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.checkin}
                        >
                        <Text style={styles.txtcheckin}>Check In</Text>
                       
                    </TouchableOpacity>
                </View>    
           
    )
}
    ;
export default InfoEventScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        flex:1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: 'white',
    },
    text1: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },
    view1: {
        paddingLeft: 30,
        paddingRight: 30,
        marginLeft: 30,
        marginRight: 30,
        width: '100%',
        height: 650,
        backgroundColor: "#426ef0",
        borderRadius: 8,
    
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
        top: 300,
        backgroundColor: "white",
    },
    view3: {
        position: "absolute",
        right: -25,
        width: 50,
        height: 50,
        borderRadius: 25,
        top: 300,
        backgroundColor: "white",
    },
    imgEvent:{
        height: 200,
        width: '100%',
        resizeMode: "cover",
    },
    nameEvent:{
        fontSize: 16,
        fontWeight:'bold',
        color:'white',
        width: "100%",
        marginTop: 10,
        paddingBottom:20,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    txtMap:{
        marginTop:20,
        fontSize: 13,
        // fontWeight:'bold',
        color:'white',
        // textDecorationLine: 'underline',
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsi', 
        whiteSpace: 'nowrap',
    },
    txtMap1:{
        fontSize: 15,
        fontWeight:'bold',
        color:'white',
        marginTop:5,
        // textDecorationLine: 'underline',
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap',
    },
    img: {
        width: 30,
        height: 30
    },
    checkin: {
        marginTop: 20,
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
    txtcheckin: {
        fontSize: 15,
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bold',
    },
    date:{
        fontSize: 13,
        color: 'white',
    },
    date1:{
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    time:{
        fontSize: 13,
        color: 'white',
    },
    time1:{
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },

});