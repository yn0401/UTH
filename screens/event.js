import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, TextInput, SafeAreaView, ScrollView, ImageBackground, FlatList } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";

const items = [
    {
        id: 1,
        name: 'CUỘC THI MOBILE GAME CHALLENGE 2022 MOBILE GAME',
        img: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/317550139_3405090839706741_6665726607969878686_n.png?stp=dst-png_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHm8mRGrfF4AX-WrVsa&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCArY01TeM2UB2Kx8CEV9_pkBmfzt5NaTClKIJ05Au8Ww&oe=6390800A',
        map: 'Đại Học Hoa Sen',
    },
    {
        id: 2,
        name: 'HỘI THẠO KIẾN TRÚC ĐÔ THỊ THÔNG MINH',
        img: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315750176_3399435150272310_4999432971186367577_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=O915aHWEpMgAX8MarhF&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDW_4FzytXkg1xjrlJ4IgmUSbSfeuamI_1bkv08CxMaJA&oe=6390F250',
        map: 'Hội trường 903 - Cơ sở Nguyễn Văn Tráng',
    },
    {
        id: 3,
        name: '(MEETING) CAFE CODE',
        img: 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315082966_431636329138789_8936378990191417687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vJ5UXDnAv8UAX8d8Rky&tn=krkdQIYm3B3J44nq&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDebhCopozBSVHsRcxci0WxpTGvBB0GbdSfx3NJq7ej0A&oe=63905782',
        map: 'Cơ sở Thành Thái'
    }
]

const EventScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };

    const info = () => {
        navigation.navigate("InfoEvent");
    };

    const ListEvent = ({ item, navigation }) => {
        return (
            <View style={styles.main}>
                <TouchableOpacity onPress={info} style={styles.event}>
                    <Image style={styles.imgEvent}
                        source={{
                            uri: item.img,
                        }}
                    />
                    <Text style={styles.nameEvent}>{item.name}</Text>
                    <View style={styles.map}>
                        <Fo name='map-marker-alt' style={styles.iconMap} />
                        <Text style={styles.txtMap}>{item.map}</Text>
                    </View>
                </TouchableOpacity>

            </View>

        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.txt}>Exceeding Event Expectations</Text>
                    
                    <TouchableOpacity style={{ marginLeft: 10, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: 'white', textAlign: 'center', justifyContent: "center", alignItems: "center" }}>
                                    <Fo name="plus" style={styles.icon3} />
                    </TouchableOpacity>
                    {/* <View style={styles.sectionStyle}>
                        <Fo name="search" size={20} style={styles.imageStyle} />
                        <TextInput
                            style={{ flex: 1, color: 'white' }}
                            placeholder="Search . . ."
                            underlineColorAndroid="transparent"
                        />
                    </View> */}
                    {/* <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={info}
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
                    </View> */}
                </View>
                {/* <Text style={{ color: '#808080', fontSize: 16, }}>This Weekend</Text> */}
                <FlatList
                        data={items}
                        renderItem={ListEvent}
                    />
                {/* <View style={styles.main}>
                    <Text style={{color: '#808080', fontSize:16,}}>This Weekend</Text>
                    <TouchableOpacity onPress={info} style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/317550139_3405090839706741_6665726607969878686_n.png?stp=dst-png_p960x960&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GHm8mRGrfF4AX-WrVsa&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCArY01TeM2UB2Kx8CEV9_pkBmfzt5NaTClKIJ05Au8Ww&oe=6390800A",
                            }}
                        />  
                    <Text style={styles.nameEvent}>CUỘC THI MOBILE GAME CHALLENGE 2022 MOBILE GAME</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Đại Học Hoa Sen</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={info} style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315750176_3399435150272310_4999432971186367577_n.jpg?stp=dst-jpg_p960x960&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=O915aHWEpMgAX8MarhF&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDW_4FzytXkg1xjrlJ4IgmUSbSfeuamI_1bkv08CxMaJA&oe=6390F250",
                            }}
                        />  
                    <Text style={styles.nameEvent}>HỘI THẠO KIẾN TRÚC ĐÔ THỊ THÔNG MINH</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Hội trường 903 - Cơ sở Nguyễn Văn Tráng</Text>
                    </View>
                    </TouchableOpacity>     

                    <TouchableOpacity onPress={info} style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315082966_431636329138789_8936378990191417687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vJ5UXDnAv8UAX8d8Rky&tn=krkdQIYm3B3J44nq&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDebhCopozBSVHsRcxci0WxpTGvBB0GbdSfx3NJq7ej0A&oe=63905782",
                            }}
                        />  
                    <Text style={styles.nameEvent}>(MEETING) CAFE CODE</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Cơ sở Thành Thái</Text>
                    </View>
                    </TouchableOpacity>     
                </View> */}



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
        backgroundColor: '#426ef0',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        padding: 20,
        flex: 2,
        marginBottom: 10,
    },
    main: {
        marginBottom: 10,
        marginLeft:20,
        marginRight: 20,

    },
    txt:{
        width: '85%',
        fontSize: 32,
        alignItems:'flex-start',
        color: 'white',
        fontWeight:'bold',
    },
    imgHeader: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 0,
    },
    name: {
        justifyContent: 'center',
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    },
    imgAvatar: {
        justifyContent: 'center',
        alignItems:'center',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 5,
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
    button: {
        flexDirection: 'row',
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        top: 0,
        borderRadius: 20,
        // justifyContent:'center',
        // alignItems:'center',
        // width: 80,
        // height: 30,
        flexDirection: 'row',
        backgroundColor: '#23145b',
        marginRight: 15,
    },
    iconEvent: {
        fontSize: 20,
        color: 'white'
    },
    iconMap: {
        fontSize: 15,
        color: 'black'
    },
    txtEvent: {
        marginLeft: 10,
        color: '#fff',
    },
    event: {
        justifyContent: 'center',
        marginTop: 20,
    },
    imgEvent: {
        height: 200,
        width: '100%',
        resizeMode: "cover",
    },
    nameEvent: {
        fontSize: 20,
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        marginTop: 10,
        marginBottom: 10,
    },
    map: {
        flexDirection: 'row'
    },
    txtMap: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
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
});