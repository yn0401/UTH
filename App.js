import { Provider } from "react-redux";
import Navigation from "./screens/navigation";
import store from "./redux/stores/store";
import { theme } from "./core/theme";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";

export default function App() {
  return (

    <Provider store={store} theme={theme}>
    <Navigation />
  </Provider>


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
