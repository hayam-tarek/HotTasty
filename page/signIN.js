import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, Image,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../middlewere/firebase';
import { useNavigation } from '@react-navigation/native';

export default function SignIN({ }) {

    React.useLayoutEffect(() => {

        navigation.setOptions({ headerShown: false });
    }, []);

    const image = require("../assets/sky.png");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [timesPressed, setTimesPressed] = useState(0);

    const navigation = useNavigation();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log("Done")
                navigation.navigate('Profile');
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                console.warn(errorMessage)
            });
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.image} source={require('../assets/text.png')}></Image>
            <View style={styles.inView}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                        placeholder="Email"
                        //placeholderTextColor="#003f5c"
                        onChangeText={email => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                        placeholder="Password"
                        //placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonforgot} onPress={() => navigation.navigate('ForgetPass')}>
                <Text style={styles.btnTextforgot} >Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        //justifyContent: 'space-around',
        backgroundColor: 'white',
        alignItems: "center",
    },
    image: {
        width: 400,
        height: 100,
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#c16419',
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20,
    },
    inView: {
        marginVertical: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    inputText: {
        //fontWeight: 'bold',
        fontSize: 20,
        height: 50,
        color: "#1b3b52",

    },
    buttonContainer: {
        width: "45%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c16419',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: -190,
        // marginTop: -60,
        marginBottom: 15,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',

    },
    buttonforgot: {
        width: "100%",
        // borderRadius: 10,
        // borderWidth: 2,
        // borderColor: '#c16419',
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: -190,
        // marginTop: -60,
        marginBottom: 15,
        // backgroundColor: 'rgba(193, 100, 25, 0.3)',

    },
    btnText: {
        color: '#1b3b52',
        fontSize: 27.5,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnTextforgot: {
        color: '#1b3b52',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
