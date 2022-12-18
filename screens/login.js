import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import TextInput from "../components/TextInput";
import { useState } from "react";
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import QRScreen from "./qr";
import BackButton from "../components/BackButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const auth = getAuth();
  
  const login = (email,password) => {
    console.log('email', email);
    console.log('password', password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const member = {
          email: user.email,
          name: user.displayName,
          url: user.photoURL,
          createdAt: Date.now(),
        };
        console.log('user', member);
        navigation.navigate("Main", { member: member });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorMessage);
        console.log('error', errorCode);
        if(errorCode === 'auth/wrong-password'){
          alert('Wrong password');
        }else if(errorCode === 'auth/user-not-found'){
          alert('User not found');
        }else{
          alert(`Something wrong pls try again`);
        }
      });
    }


  const navigateToGuest = () => {
    navigation.navigate("Guest");
  };

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    login(email.value, password.value);
  }

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <View style={styles.content}>
        <Text style={styles.title}>UNDER THE HOOD</Text>
        <Text style={styles.subTitle}>SIGN IN</Text>
      </View>

      <TextInput
        label="Email"
        returnKeyType="next"
        // style={styles.input}
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder='Email'
      />


      <TextInput
        label="Password"
        returnKeyType="done"
        // style={styles.input}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        value={password.value}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        placeholder='Password'
      />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={onLoginPressed} style={styles.button}>
          <Text style={styles.btn}>Sign in</Text>
          <Icon name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={navigateToGuest} style={styles.button}>
          <Text style={styles.btn}>Guest</Text>
          <Icon name="arrow-right" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>

  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#426ef0',
  },
  input: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 15,
    borderColor: '#426ef0',
    borderRadius: 25,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#426ef0",
  },
  subTitle: {
    fontSize: 13,
    color: "#426ef0",
  },
  button: {
    backgroundColor: "#426ef0",
    padding: 15,
    borderRadius: 25,
    width: 300,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: "90%",
    textAlign: "center",
    marginLeft: 10,
  },
  img: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  icon: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    width: "10%",
  },
});
