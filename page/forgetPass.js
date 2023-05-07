import React, { Component } from 'react'
import { useState } from "react";
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, Image,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../middlewere/Config';
import Frame from "../assets/back.png";

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

            <View style={styles.titleView}>
                <View style={styles.frameView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("SignIN");
                        }}
                    >
                        <Image source={Frame} style={styles.frame} />
                    </TouchableOpacity>
                </View>
                <View style={styles.wordView}>
                    <Text style={styles.title}>Forgot Password</Text>
                </View>
            </View>


            <Text style={styles.text}>Enter your email to reset your password!</Text>

            <View style={styles.emailView}>
                <Text style={styles.inpText}>E-mail Adderss</Text>
                <View style={styles.inpView}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                    />
                </View>
            </View>




            <View style={styles.buttonview}>
                <TouchableOpacity style={styles.button} onPress={handleForgetPass}>
                    <View style={styles.button2}>
                        <Text style={styles.button1}> Send verification link</Text>
                    </View>
                </TouchableOpacity>
            </View>



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
    frameView: {

        marginLeft: 15,
        marginRight: 80,

    },
    frame: {
        width: 33,
        height: 30,
    },
    titleView: {
        flexDirection: 'row',
        paddingBottom: 50,
        marginRight: 120,

    },
    title: {

        color: "#042628",
        fontWeight: 1000,
        fontSize: 23,
    },
    emailView: {
        marginTop: 32,
    },
    inpText: {
        color: "#042628",
        marginBottom: 5,

        fontWeight: 500,
        fontSize: 14,

    },
    input: {
        backgroundColor: "#ffff",
        borderColor: "#042628",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 15,
        paddingLeft: 5,
    },
    buttonview: {
        marginTop: 30,
    },
    button: {
        borderRadius: 15,
        width: 328,
        height: 48,
        backgroundColor: "#042628",
        color: "#ffff",


    },
    button1: {
        textAlign: 'center',

        fontWeight: 500,
        fontSize: 18,
        color: "#ffff",
    },
    button2: {
        alignItems: "center",
        marginTop: 15,
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
        marginBottom: 70
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
        marginBottom: 30,
    },
    btnTextforgot: {
        color: '#1b3b52',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
