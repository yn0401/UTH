import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import GiftScreen from './screens/gift';
import HomeScreen from './screens/home';
import Navigation from "./screens/navigation";
export default function App() {
  return (
    // <Provider>
    //   <Navigation />
    // </Provider>
<Navigation/>
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
