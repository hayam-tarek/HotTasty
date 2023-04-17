import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, ImageBackground,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../middlewere/firebase';
import { useNavigation } from '@react-navigation/native';

export default function SignIN({ }) {

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
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Sign In</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        keyboardType="default"
                        secureTextEntry={true}
                        style={styles.input}
                    //onSubmitEditing={() => alert("Done")}
                    />
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={handleSignIn}>
                        <Text style={styles.text2}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('ForgetPass')}>
                        <Text style={styles.text2} >Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer3} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.text2}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // alignItems: "center",  
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
        //margin: 10,
    },
    container3: {
        marginTop: 25,
        flex: 1,
        alignItems: "center",
        //justifyContent: "center",
        flexDirection: 'column',
        //justifyContent: 'space-around',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    inputView: {
        //width: "70%",
        height: 50,
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'dodgerblue',
        backgroundColor: "#fff",
        opacity: .75
    },
    buttonContainer1: {
        width: "80%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "limegreen",
        marginBottom: 10,

    },
    buttonContainer2: {
        width: "80%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "darkorange",
        marginBottom: 10,

    },
    buttonContainer3: {
        width: "80%",
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
        marginVertical: 100
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
