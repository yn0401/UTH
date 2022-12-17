import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./screens/navigation";
import store from "./redux/stores/store";
import GiftDetail from "./screens/profileDetails";
import DetailProfile from "./screens/profileDetails";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      {/* <GiftDetail /> */}
      {/* <DetailProfile /> */}
    </Provider>
    // <EditProfileScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
