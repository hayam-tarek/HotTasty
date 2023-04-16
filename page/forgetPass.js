import React, { Component } from 'react'
import { useState } from "react";
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, ImageBackground,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../firebase';

export default function ForgetPass({ navigation }) {

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

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Forget Password?</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={handleForgetPass}>
                        <Text style={styles.text2}>Send verification link</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('SignIN')}>
                        <Text style={styles.text2}>Back to sign in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        //margin: 10,
    },
    container3: {
        flex: 1,
        alignItems: "center",
        //justifyContent: "center",
        flexDirection: 'column',
        //justifyContent: 'space-around',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
    inputView: {
        //width: "70%",
        height: 50,
        //marginBottom: 20,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'dodgerblue',
        backgroundColor: "#fff",
        marginBottom: 10,
        opacity: .75
    },
    buttonContainer1: {
        width: "80%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "dodgerblue",
        marginBottom: 10,

    },
    buttonContainer2: {
        width: "60%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "dodgerblue",
        marginBottom: 10,

    },
    text: {
        color: 'dodgerblue',
        fontSize: 30,
        lineHeight: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: .75,
        marginVertical:150
    },
    text2: {
        color: 'white',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 30,
    },
    input: {
        height: 35,
        margin: 5,
        padding: 5,
        color: "black",
    },
    wrapperCustom: {
        padding: 4,
        borderRadius: 30,
        marginTop: 30,
    },
    logBox: {
        padding: 10,
        //margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
        borderRadius: 30,
    },
});
