import React, { useState } from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import TextInput from "../components/TextInput";
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import BackButton from '../components/BackButton';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import * as MemberActions from '../redux/actions/memberAction';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const navigateToGuest = () => {
        navigation.navigate("Guest");
    };

    const dispatch = useDispatch();

    const auth = getAuth();
    const register = (email, password, name) => {
        console.log('name', name);
        console.log('email', email);
        console.log('password', password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const member = {
                    email: user.email,
                    name: name,
                    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Blackpink_Lisa_GMP_240622.png',
                    role: 'member',
                    currentPoint: 0,
                    dob: '',
                    createdAt: Date.now(),
                };
                console.log('member', member);
                dispatch(MemberActions.fetchAddNew(member));
                navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'Main',
                        params: { member: member }
                    }],
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('error', errorMessage);
                console.log('error', errorCode);
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use');
                }
                if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email');
                }
                if (errorCode === 'auth/weak-password') {
                    alert('Weak password');
                }

            });
    }
    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        register(email.value, password.value, name.value);

    }

    return (
        <View style={styles.container}>
            <BackButton goBack={navigation.goBack} />
            <View style={styles.content}>
                <Text style={styles.title}>UNDER THE HOOD</Text>
                <Text style={styles.subTitle}>SIGN UP</Text>
            </View>
            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />
            <TextInput
                label="Email"
                returnKeyType="next"

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
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                value={password.value}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
                placeholder='Password'
            />

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={onSignUpPressed} style={styles.button}>
                    <Text style={styles.btn}>Sign Up</Text>
                    <Icon name="arrow-right" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.link}>Login</Text>
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

}

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
})
