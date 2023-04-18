import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View,
    Button, TouchableOpacity, Image,
    SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { signInWithEmailAndPassword ,signInWithPopup} from "firebase/auth";
import { auth, db , provider } from '../middlewere/firebase';
import { useNavigation } from '@react-navigation/native';
import Google from "../assets/logos_google-icon.png"; 

export default function SignIN({ }) {

    const [value, setValue] = useState("");
    const SingInWithGoogle = () => {
      signInWithPopup(auth, provider).then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      });
    };


    React.useLayoutEffect(() => {

        navigation.setOptions({ headerShown: false });
    }, []);

    const image = require("../assets/sky.png");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [timesPressed, setTimesPressed] = useState(0);

    const navigation = useNavigation();


    const checkDate = () => {
        if (!email.includes("@") || email.length === 0 || password.length < 8)
          alert("invalid information");
        else
          signInWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("TabFun");
              alert("Login Success!");
            })
            .catch((e) => {
              if (
                e.message.includes("invalid-email") &&
                email === "" &&
                password === ""
              ) {
                alert("Please enter your email and password");
              } else if (e.message.includes("invalid-email") && email === "") {
                alert("Please enter your email");
              } else if (e.message.includes("invalid-email") && email !== "") {
                alert("The Email is incorrect");
              } else if (e.message.includes("internal-error") && password === "") {
                alert("Please enter your password");
              } else if (e.message.includes("wrong-password") && password !== "") {
                alert("The password is incorrect");
              } else if (
                e.message.includes("user-not-found") &&
                email !== "" &&
                password !== ""
              ) {
                alert("The user is not exist");
              }
            });
      };



    // const handleSignIn = () => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             console.log("Done")
    //             navigation.navigate('Profile');
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage)
    //             console.warn(errorMessage)
    //         });
    // }

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
            <TouchableOpacity style={styles.buttonContainer}  onPress={checkDate}>
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonforgot} onPress={() => navigation.navigate('ForgetPass')}>
                <Text style={styles.btnTextforgot} >Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.SinginWithGoogleView}>
        {value ? (
          navigation.navigate("Home")
        ) : (
          <TouchableOpacity style={styles.touch} onPress={SingInWithGoogle}>
            <Image source={Google} style={styles.GoogleIcon} />
            <View style={styles.GoogleTextView}>
              <Text style={styles.GoogleText}>Sing in with Google</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

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
    touch: {
        borderColor: "#0B3B63",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 5,
      },
      GoogleIcon: {
        marginTop: 15,
        marginLeft: 78,
        width: 16,
        height: 16,
      },
      GoogleText: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: '#1b3b52',
    
       
        textAlign: "center",
      },
      GoogleTextView: {
        marginTop: -15,
        borderColor: '#c16419',
      },
      SinginWithGoogleView: {
        marginTop: 30,
        backgroundColor: 'rgba(193, 100, 25, 0.3)',
      },
});
