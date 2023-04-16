import React, { Component } from 'react'
import { useState } from "react";
import {
  StyleSheet, Text, View,
  Button, TouchableOpacity, ImageBackground,
  SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';

export default function Home({ navigation }) {

  const image = require("../assets/sky.png");
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = timesPressed + 'x onPress';
  }


  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>HelloSky! </Text>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('SignIN')}>
            <Text style={styles.text2}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text2}>Register</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    //margin: 10,
  },
  image: {
    flex: 1,
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
    marginBottom: 50,
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
    opacity: .75,
    marginVertical:200,
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
