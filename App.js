import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import GiftScreen from './screens/gift';
import GuestScreen from './screens/guest1';
import HistoryScreen from './screens/history';
import HomeScreen from './screens/home';
import Navigation from "./screens/navigation";
import ProfileScreen from './screens/profile';
import QRScreen from './screens/qr';
import EditProfileScreen from './screens/editprofile';
import EventScreen from './screens/event';
import InfoEventScreen from './screens/infoevent';
import store from "./redux/stores/store";
import TransactionDetailsScreen from './screens/transactiondetails';
import AddScreen from './screens/add';
export default function App() {
  return (
//     <Provider store={store}> 
// <Navigation/>
//     </Provider>

<AddScreen/>

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
