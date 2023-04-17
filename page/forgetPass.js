import React, { Component } from 'react'
import { useState } from "react";
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, Image,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../middlewere/firebase';

export default function ForgetPass({ navigation }) {

    React.useLayoutEffect(() => {

        navigation.setOptions({ headerShown: false });
    }, []);

    const image = require("../assets/sky.png");
    const [email, setEmail] = useState("");
    const handleForgetPass = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log("Done");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                console.warn(errorMessage)
                // ..
            });

    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={require('../assets/text.png')}></Image>
            <Text style={styles.text}>Enter your email to reset your password!</Text>
            <View style={styles.inputView}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    style={styles.inputText}
                />
            </View>

                <TouchableOpacity style={styles.buttonforgot} onPress={handleForgetPass}>
                    <Text style={styles.btnTextforgot}>Send verification link</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignIN')}>
                    <Text style={styles.btnText}>Back to sign in</Text>
                </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: "center",
        //justifyContent: 'space-around',
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
        marginBottom:70
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
        width: "60%",
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
        width: "60%",
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
    btnText: {
        color: '#1b3b52',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#1b3b52',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:30,
    },
    btnTextforgot: {
        color: '#1b3b52',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
