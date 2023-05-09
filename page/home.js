import React, { Component } from 'react'
import { useState } from "react";
import {
  StyleSheet, Text, View,
  Button, TouchableOpacity, ImageBackground,
  SafeAreaView, TextInput, Pressable, secureTextEntry
} from 'react-native';

export default function Home({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const image = require("../assets/back2.png");

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIN')}>
              <Text style={styles.text}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 350,

  },
  buttonContainer: {
    //flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1b3b52',
    backgroundColor: 'white',
    height: 40,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  text: {
    color: '#c16419',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
