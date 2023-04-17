import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, ImageBackground,DatePicker,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../middlewere/firebase';
import { useNavigation } from '@react-navigation/native';

export default function Register({ }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
         }, []);
      

    const image = require("../assets/sky.png");
    const [email, setEmail] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setrePassword] = useState("");

    const navigation = useNavigation();

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Done")
                navigation.navigate('Profile');
                // ...
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
                <Text style={styles.text}>Create an account</Text>
                <View style={styles.container2}>
                    <View style={styles.inputView2}>
                        <TextInput
                            placeholder="First Name"
                            value={fname}
                            onChangeText={(fname) => setFName(fname)}
                            keyboardType="default"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.inputView2}>
                        <TextInput
                            placeholder="Last Name"
                            value={lname}
                            onChangeText={(lname) => setLName(lname)}
                            keyboardType="default"
                            style={styles.input}
                        />
                    </View>
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Phone number"
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                </View>
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
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Confirm Password"
                        value={repassword}
                        onChangeText={(repassword) => setrePassword(repassword)}
                        keyboardType="default"
                        secureTextEntry={true}
                        style={styles.input}
                    //onSubmitEditing={() => alert("Done")}
                    />
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={handleRegister}>
                        <Text style={styles.text2}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('SignIN')}>
                        <Text style={styles.text2}>Sign in</Text>
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
    },
    container2: {
        //flex: 1,
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
        //marginBottom: 10,
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
    inputView2: {
        width: "50%",
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
        marginBottom: 5,

    },
    buttonContainer2: {
        width: "80%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "darkorange",
        marginBottom: 5,

    },
    buttonContainer3: {
        width: "80%",
        padding: 4,
        borderRadius: 30,
        height: 40,
        backgroundColor: "dodgerblue",
        marginBottom: 5,

    },
    text: {
        color: 'dodgerblue',
        fontSize: 30,
        lineHeight: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: .75,
        marginVertical:50
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
