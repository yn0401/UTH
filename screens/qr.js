import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";


const QRScreen = ({navigation}) => {
return(
    <SafeAreaView style={styles.container} >
        <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
            <TouchableOpacity>
            <Fo style={{marginLeft: 20}}name="arrow-left" size={30}/>
            </TouchableOpacity>
            
            <Text style={{color:'#427BC8',width:'80%',fontSize:16, fontWeight:'bold',textAlign:'center',justifyContent:'center',alignItems:'center'}}>Request</Text>
        </View>
        <View style={styles.main}>
        <View style={styles.imgQR}>
        <Image
              style={{ width: 180, height: 180, marginBottom: 10}}
              source={{
                uri: "https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png",
              }}
            />
        <Text style={{fontSize:14}}>Scan untuk request</Text>
        </View>
        <View style={styles.linkRequest}>
              <View style={{flexDirection:'row', alignItems:'center', width:'100%'}}>
              <View style={{ flexDirection:'row', alignItems:'center', width:'75%'}}>
              <Fo style={{color:'#757575'}}name="link" size={15}/>
              <Text style={{color:'#757575', alignItems:'center', marginLeft: 10}}>Link Request</Text>
              </View>
              <View style={{ width:'25%',textAlign:'right',alignItems:'center',justifyContent:'center'}}>
                <View style={{backgroundColor:'#757575', width: 90, height:20, borderRadius:3,textAlign:'right',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white', textAlign:'center'}}>Link Tersalin!</Text>
                </View>
              </View>
              </View>
              <View style={{marginTop:10,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <TextInput style={styles.linkInput}
              placeholder="https://link.spesolution.com/req/3mgakb3gacf"
              
              />
               <TouchableOpacity style={{height:40,width:40,backgroundColor:'#DEE6EF',alignItems:'center',justifyContent:'center'}}>
                <Fo style={{color:'#828282',backgroundColor:'#DEE6EF',alignItems:'center',}}name="copy" size={20}/>
              </TouchableOpacity>
              </View>
              <Text style={styles.name}>Nhi Dang Ngoc Yen</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <TextInput style={styles.nameInput}
              placeholder="Masukkan nama atau nomor handphone"
              
              />
              <TouchableOpacity style={{height:40,width:40,alignItems:'center',justifyContent:'center'}}>
                <Fo style={{color:'#828282',alignItems:'center',}}name="times-circle" size={20}/>
              </TouchableOpacity>
              <TouchableOpacity style={{height:40,width:40,alignItems:'center',justifyContent:'center'}}>
                <Fo style={{color:'#828282',alignItems:'center',}}name="address-book" size={20}/>
              </TouchableOpacity>
              </View>
              <View style={styles.coinInput}>
              <Text style={styles.txtName}>Masukkan Nominal</Text>
              <Text style={styles.coin}>Rp20.000</Text>
              </View>
              <View style={styles.option}>
                <Text style={styles.txtOption}>Pesan (Opsional)</Text>
                <TextInput style={styles.optionInput}
                placeholder="Masukkan nama atau nomor handphone"
              />
              </View>
              <TouchableOpacity style={{width:'100%',height:37,borderRadius:5, backgroundColor:'#E5E5E5',marginTop:20,justifyContent:'center',textAlign:'center',alignItems:'center'}}>
              <Text style={{color:'#828282',fontWeight:'bold'}}>Confirm</Text>
              </TouchableOpacity>
        </View>
        </View>
        
        </ScrollView>
    </SafeAreaView>
)};

export default QRScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#426ef0",
    },
    scrollView: {
        backgroundColor: 'white',
    },
    header:{
        width: '100%',
        height: 60,
        alignItems:'center',
        backgroundColor:'white',
        flexDirection: 'row',
    },
    main:{
        padding:20
    },
    imgQR:{
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        paddingBottom: 20
    },
    linkInput:{
        width: '90%',
        height: 40,
        backgroundColor:'#DEE6EF',
        paddingLeft: 10,
        alignItems:'center',
    },
    name:{
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        marginTop: 50,
        marginBottom: 50
    },
    nameInput:{
        width: '80%',
        height: 40,
        borderBottomWidth: 1,
        alignItems:'center',
    },
    coinInput:{
        height:69,
        width:'100%',
        paddingLeft: 10,
        justifyContent:'center',
        backgroundColor:'#DEE5EF',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#427BC8',
        marginTop: 30,
        marginBottom: 50
    },
    txtName:{
        fontSize: 12,
        marginBottom: 10,
        color:'#757575'
    },
    coin:{
        fontSize: 16,
        fontWeight:'bold'
    },
    txtOption:{
        fontSize: 12,
        color:'#757575'
    },
    optionInput:{
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        alignItems:'center',
    },
});