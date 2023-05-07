import React, { Component } from 'react'
import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View,
  Button, TouchableOpacity, Image,
  SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';
import { login } from "../middlewere/firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../middlewere/Config";
import { useNavigation } from '@react-navigation/native';
import Google from "../assets/logos_google-icon.png";
import Frame from "../assets/back.png";

export default function SignIN({ }) {

  const [value, setValue] = useState("");
  const SingInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkDate = () => {
    if (!email.includes("@") || email.length === 0 || password.length < 8)
      alert("invalid information");
    else
      login(email, password)
        .then(() => {
          navigation.navigate("Card");
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






  React.useLayoutEffect(() => {

    navigation.setOptions({ headerShown: false });
  }, []);

  const image = require("../assets/sky.png");

  const [timesPressed, setTimesPressed] = useState(0);

  const navigation = useNavigation();




  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleView}>
        <View style={styles.frameView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GetStart");
            }}
          >
            <Image source={Frame} style={styles.frame} />
          </TouchableOpacity>
        </View>
        <View style={styles.wordView}>
          <Text style={styles.title}>Login</Text>
        </View>
      </View>

      <View style={styles.emailView}>
        <Text style={styles.inpText}>E-mail Adderss</Text>
        <View style={styles.inpView}>
          <TextInput
            style={styles.input}
            onChangeText={email => setEmail(email)}
          />
        </View>
      </View>

      <View style={styles.emailView}>
        <Text style={styles.inpText}>Password</Text>
        <View style={styles.inpView}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>




      <View style={styles.buttonview}>
        <TouchableOpacity style={styles.button} onPress={checkDate}>
          <View style={styles.button2}>
            <Text style={styles.button1}> Sign in</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonforgot} onPress={() => navigation.navigate('ForgetPass')}>
        <Text style={styles.btnTextforgot} >Forgot password?</Text>
      </TouchableOpacity>



      <View>
        <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
      </View>


      <View style={styles.SinginWithGoogleView}>
        {value ? (
          navigation.navigate("Card")
        ) : (
          <TouchableOpacity style={styles.touch} onPress={SingInWithGoogle}>
            <Image source={Google} style={styles.GoogleIcon} />
            <View style={styles.GoogleTextView}>
              <Text style={styles.GoogleText}>Sing in with Google</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.uptextView}>
        <Text style={styles.accountcreate}>
          Don't have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.uptext}>Sign up</Text>
          </TouchableOpacity>
        </Text>
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
    borderColor: "#042628",
    borderWidth: 1,
    width: 328,
    height: 48,
    borderRadius: 20,
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

    color: 'white',


    textAlign: "center",
  },
  GoogleTextView: {
    marginTop: -15,
    borderColor: '#white',
  },
  SinginWithGoogleView: {
    marginTop: 30,
    borderRadius:15,
    backgroundColor: '#042628',
  },
  accountcreate: {
    color: "#70b9be",

    marginBottom: 50,
    fontSize: 15,
  },
  uptext: {
    textDecorationLine: "underline",
    color: "#042628",
    fontSize: 15,
  },
  uptextView: {
    marginTop: 30,
    marginRight: 130,
    marginBottom: 72,
  },
});
