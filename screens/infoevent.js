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
const InfoEventScreen = ({ navigation }) => {
    const navigate = () => {
        navigation.navigate("ViewAll");
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.imgHeader}>
                        <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315857268_3396307810585044_601255144760363868_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=NcymoNYj1okAX-rGkoP&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDMaIXiteg_2BYXmtOAsR5KLF53VfMoAhi_xmWe9xbCDg&oe=637F701E",
                            }}
                        />
                    </View>
                    {/* <View style={styles.sectionStyle}>
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
                    <Text style={{color: '#808080', fontSize:16,}}>This Weekend</Text>
                    <View style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315857268_3396307810585044_601255144760363868_n.png?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=NcymoNYj1okAX-rGkoP&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDMaIXiteg_2BYXmtOAsR5KLF53VfMoAhi_xmWe9xbCDg&oe=637F701E",
                            }}
                        />  
                    <Text style={styles.nameEvent}>CUỘC THI MOBILE GAME CHALLENGE 2022 MOBILE GAME</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Đại Học Hoa Sen</Text>
                    </View>
                    </View>

                    <View style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315541345_449625487292960_9054923741286163368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=foUeWCtdAt8AX8jJa93&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAlJn55gPOjEtgTFotRFSEW-x1ijOQ7UaQ7V7R58zxMsA&oe=637E07A0",
                            }}
                        />  
                    <Text style={styles.nameEvent}>HỘI THẠO KIẾN TRÚC ĐÔ THỊ THÔNG MINH</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Hội trường 903 - Cơ sở Nguyễn Văn Tráng</Text>
                    </View>
                    </View>     

                    <View style={styles.event}>
                    <Image style={styles.imgEvent}
                            source={{
                                uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/313414478_428971789405243_5807290521260914488_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=v6GFki_mKUYAX-esRSw&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCMxxVfAFcs_UcloSQaYnFDpY0UmEj7CEetBNhFY7Jqbg&oe=637FCDE8",
                            }}
                        />  
                    <Text style={styles.nameEvent}>(MEETING) CAFE CODE</Text>
                    <View style={styles.map}>
                    <Fo name='map-marker-alt' style={styles.iconMap} />
                    <Text style={styles.txtMap}>Cơ sở Thành Thái</Text>
                    </View>
                    </View>      */}
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}
    ;
export default InfoEventScreen;
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
        flex: 3,

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
    iconMap:{
        fontSize: 15,
        color:'black'
    },
    txtEvent:{
        marginLeft: 10, 
        color: '#fff', 
    },
    event:{
        justifyContent:'center',
        marginTop: 20,
    },
    imgEvent:{
        height: 300,
        width: '100%',
        resizeMode: "cover",
    },
    nameEvent:{
        fontSize: 20,
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap',
        marginTop: 10,
        marginBottom: 10,
    },
    map:{
        flexDirection: 'row'
    },
    txtMap:{
        marginLeft:10,
        fontSize: 15,
        fontWeight:'bold',
        textDecorationLine: 'underline',
        width: "100%",
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
        whiteSpace: 'nowrap',
    }
});