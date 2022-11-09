import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import Ion from "react-native-vector-icons/Ionicons";
import Fo from "react-native-vector-icons/FontAwesome5";
import Mate from "react-native-vector-icons/MaterialCommunityIcons";
import Mat from "react-native-vector-icons/MaterialIcons";
import Foun from "react-native-vector-icons/Foundation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Guest1({ navigation }) {
  const navigate = () => {
    navigation.navigate("Main");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <View style={styles.header}>
                <View style={styles.main}>
                    <Text style={{ width: '90%', color: 'black', fontSize: 16 }}>Cùng đón một ngày thú vị nhé !</Text>
                    <Mate name="qrcode-scan" size={20} style={{ color: 'black' }} />
                </View>
            </View> */}

        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.headerCard}>
              <Text style={styles.name}>Chào Bạn !</Text>
              {/* <Button
                            title="Go to Details"
                            onPress={() => navigation.navigate('Thông tin thành viên')}
                        /> */}
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 20,
                  backgroundColor: "black",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0.7,
                }}
                onPress={() => {
                  navigation.navigate("Thông tin thành viên", {
                    name: "Thông tin thành viên",
                  });
                }}
              >
                <Mat name="navigate-next" size={20} style={styles.iconHeart} />
              </TouchableOpacity>
            </View>
            <View style={styles.contentCard}>
              <View style={styles.txtContent}>
                <Text style={styles.type}>
                  Tham gia chương trình thành viên của RunWay Club ngay để tích
                  điểm và nhận quà hấp dẫn
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 50,
                marginLeft: 20,
                height: 35,
                width: 130,
                borderRadius: 10,
                backgroundColor: "white",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: "bold", color: "#426ef0" }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card1}>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <View style={{ width: "30%" }}>
                <View
                  style={{
                    marginLeft: 20,
                    height: 80,
                    width: 80,
                    borderColor: "white",
                    borderRadius: 80 / 2,
                    backgroundColor: "#99CCFF",
                    borderWidth: 3,
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={styles.img}
                    source={{
                      uri: "https://cdn1.vectorstock.com/i/thumb-large/06/10/gift-card-loyalty-program-earn-points-vector-30250610.jpg",
                    }}
                  />
                </View>
              </View>
              <View style={{ width: "60%", justifyContent: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "bold",
                      marginRight: 10,
                    }}
                  >
                    {" "}
                    ĐĂNG NHẬP NGAY{" "}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 15,
                      width: 15,
                      borderRadius: 15 / 2,
                      backgroundColor: "black",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0.7,
                    }}
                    onPress={navigate}
                  >
                    <Mat
                      name="navigate-next"
                      size={15}
                      style={styles.iconHeart}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10 }}>
                  NHIỀU QUÀ TẶNG HẤP DẪN CHÀO BẠN MỚI
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Quà Tặng Nổi Bật
          </Text>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.gift}>
              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Ion
                    name="logo-youtube"
                    style={{
                      color: "#FC0D1B",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                  >
                    Youtube Premium
                  </Text>
                </View>
                <View style={{ textAlign: "right", width: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#FF6A62",
                    }}
                  >
                    18P
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Mate
                    name="desktop-mac"
                    style={{
                      color: "#2F498C",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                  >
                    Macbook Pro 2022
                  </Text>
                  <Mate
                    name="fire"
                    style={{
                      color: "#FF0000",
                      fontSize: 25,
                      marginLeft: 10,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                </View>
                <View style={{ textAlign: "right", width: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#FF6A62",
                    }}
                  >
                    17P
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Icon
                    name="feed-star"
                    style={{
                      color: "#66CC66",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                  <Text
                    style={{
                      flexWrap: "wrap",
                      opacity: 0.3,
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "black",
                    }}
                  >
                    Starbucks (Sold Out)
                  </Text>
                  <Mate
                    name="fire"
                    style={{
                      color: "#FF0000",
                      fontSize: 25,
                      marginLeft: 10,
                      fontWeight: "bold",
                      width: "20%",
                      opacity: 0.3,
                    }}
                  />
                </View>
                <View style={{ textAlign: "right", width: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#FF6A62",
                    }}
                  >
                    15P
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Fo
                    name="birthday-cake"
                    style={{
                      color: "#2F498C",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                  >
                    Teramisu
                  </Text>
                  <Mate
                    name="fire"
                    style={{
                      color: "#FF0000",
                      fontSize: 25,
                      marginLeft: 10,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                </View>
                <View style={{ textAlign: "right", width: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#FF6A62",
                    }}
                  >
                    9P
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: 10,
                  alignItems: "center",
                  flexDirection: "row",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Fo
                    name="birthday-cake"
                    style={{
                      color: "#2F498C",
                      fontSize: 25,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                  <Text
                    style={{ fontWeight: "bold", fontSize: 16, color: "black" }}
                  >
                    Teramisu
                  </Text>
                  <Mate
                    name="fire"
                    style={{
                      color: "#FF0000",
                      fontSize: 25,
                      marginLeft: 10,
                      fontWeight: "bold",
                      width: "20%",
                    }}
                  />
                </View>
                <View style={{ textAlign: "right", width: "15%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#FF6A62",
                    }}
                  >
                    9P
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Guest2({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.headerCard}>
              <Text style={styles.name}>Chào !</Text>
            </View>
            <View style={styles.contentCard}>
              <View style={styles.txtContent}>
                <Text style={styles.type}>
                  Tham gia chương trình thành viên của RunWay Club ngay để tích
                  điểm và nhận quà hấp dẫn
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 50,
                marginLeft: 20,
                height: 35,
                width: 130,
                borderRadius: 10,
                backgroundColor: "white",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 13, fontWeight: "bold", color: "#426ef0" }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card1}>
            <View style={{ flexDirection: "row", width: "100%" }}>
              {/* <View style={{ width: '30%' }}>
                                <View style={{ marginLeft: 20, height: 80, width: 80, borderColor: 'white', borderRadius: 80 / 2, backgroundColor: '#99CCFF', borderWidth: 3, textAlign: 'center', justifyContent: "center", alignItems: "center", }}>
                                    <Image
                                        style={styles.img}
                                        source={{
                                            uri: "https://cdn1.vectorstock.com/i/thumb-large/06/10/gift-card-loyalty-program-earn-points-vector-30250610.jpg",
                                        }}
                                    />
                                </View>
                            </View> */}
              <View style={{ width: "60%", justifyContent: "center" }}>
                <Text
                  style={{ fontSize: 11, fontWeight: "medium", marginLeft: 20 }}
                >
                  Đăng nhập làm thành viên RunWay Club để bắt đầu thu nhập Coin,
                  nâng cấp vai trò và nhận nhiều ưu đãi
                </Text>
              </View>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  style={styles.img1}
                  source={{
                    uri: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/315032765_3270826626499649_3375559883092266434_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=t3IDkJ7mtCcAX-xJBQm&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfBoWYHYn1b62KfLf7g8TQkzP6qBfEJTaeb9E1TZUgl03A&oe=63710024",
                  }}
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Đặc quyền thành viên
          </Text>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.gift}>
              <View
                style={{
                  padding: 10,
                  justifyContent: "center",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontSize: 14, fontWeight: "bold" }}
                >
                  Thưởng làm quen
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
                  Thưởng 1 mã ưu đãi 50% ngay khi đăng nhập tài khoản
                </Text>
              </View>

              <View
                style={{
                  padding: 10,
                  justifyContent: "center",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontSize: 14, fontWeight: "bold" }}
                >
                  Point Earning
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
                  Với mỗi lần quét mã QR-Code bạn sẽ tích được 5 point
                </Text>
              </View>

              <View
                style={{
                  padding: 10,
                  justifyContent: "center",
                  borderBottomWidth: 2,
                  height: 80,
                  borderBottomColor: "#EFF3FF",
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontSize: 14, fontWeight: "bold" }}
                >
                  Point Redemption
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 12, marginTop: 10 }}>
                  Với mỗi 100 points bạn sẽ được nhận một lần đổi quà tùy chọn
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function GuestScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Cùng đón một ngày thú vị nhé !" component={Guest1} />
      <Stack.Screen name="Thông tin thành viên" component={Guest2} />
    </Stack.Navigator>
  );
}

export default GuestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#426ef0",
  },
  scrollView: {
    backgroundColor: "white",
  },
  header: {
    height: 70,
    backgroundColor: "white",
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
    backgroundColor: "white",
    width: "100%",
  },
  card: {
    backgroundColor: "#426ef0",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    width: "90%",
    height: 180,
    borderRadius: 10,
  },
  card1: {
    backgroundColor: "#99CCFF",
    width: "100%",
    height: 120,
    justifyContent: "center",
  },
  headerCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  contentCard: {
    flexDirection: "row",
    width: 200,
  },
  txtContent: {
    width: 190,
  },
  Image: {
    paddingTop: 20,
    borderRadius: 20,
    width: 120,
  },
  img: {
    width: 60,
    height: 60,
    imageRendering: "pixelated",
    resizeMode: "cover",
    borderRadius: 60 / 2,
  },
  img1: {
    width: 80,
    height: 80,
    imageRendering: "pixelated",
    resizeMode: "cover",
  },
  name: {
    fontSize: 16,
    width: 120,
    paddingLeft: 20,
    paddingTop: 15,
    width: "90%",
    color: "white",
    fontWeight: "bold",
  },
  iconHeart: {
    color: "white",

    alignItems: "flex-end",
  },
  type: {
    fontSize: 11,
    marginLeft: 20,
    fontWeight: "bold",
    color: "white",
  },
  type1: {
    fontSize: 11,
    marginLeft: 20,
    marginTop: 3,
  },
  coin: {
    marginLeft: 20,
    marginTop: 30,
    color: "#FF6A62",
    fontSize: 14,
    fontWeight: "bold",
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
    textAlign: "right",
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
    textAlign: "center",
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
    width: "100%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 20,
    alignItems: "center",
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
    flexDirection: "row",
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
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  main2: {
    marginTop: 20,
    width: 351,
    height: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  button: {
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
  },
  btn1: {
    alignItem: "center",
    justifyContent: "center",
    height: 40,
    width: 80,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn2: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 113,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn3: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 70,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btn4: {
    alignItem: "center",
    justifyContent: "center",
    opacity: 0.6,
    height: 40,
    width: 70,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  btnText1: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#426EF0",
    fontWeight: "bold",
  },
  btnText2: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#7AD187",
  },
  btnText3: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#FF6A62",
  },
  btnText4: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#800080",
  },
  gift: {
    borderRadius: 15,
    width: 350,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
});
