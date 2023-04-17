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

  const image = require("../assets/back1.png");

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.text}>Join to Us </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIN')}>
              <Text style={styles.text2}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.text2}>Register</Text>
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
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  button: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
    height: 40,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#C49D43",
    fontSize: 40,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',

    opacity: .95
  },
  text2: {
    color: 'gray',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
