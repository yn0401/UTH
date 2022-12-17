import { Provider } from "react-redux";
import Navigation from "./screens/navigation";
import store from "./redux/stores/store";
import { theme } from "./core/theme";

export default function App() {
  return (
    <Provider store={store} theme={theme}>
      <Navigation />
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
