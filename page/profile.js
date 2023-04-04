import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, ImageBackground,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import auth from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { signOut } from "firebase/auth";
export default function Profile({ }) {

    const navigation = useNavigation();
    const image = require("../assets/sky.png");
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Done");
            navigation.navigate('Home');
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            console.warn(errorMessage)
        });
    }

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>{auth.currentUser.email}</Text>
                <Text style={styles.text}>You Are Welcome</Text>
            </ImageBackground>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.buttonContainer2} onPress={handleSignOut}>
                    <Text style={styles.text2}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
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
    image: {
        flex: 3,
        justifyContent: 'center',
        marginBottom: 10,
    },
    inputView: {
        //width: "70%",
        height: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'dodgerblue',
        backgroundColor: "#fff",
    },
    buttonContainer1: {
        width: "40%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "dodgerblue",
    },
    buttonContainer2: {
        width: "40%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "dodgerblue",
    },
    text: {
        color: 'dodgerblue',
        fontSize: 30,
        lineHeight: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: .75
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
