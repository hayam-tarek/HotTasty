import React, { useState } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';

export default function GetStart({ navigation }) {
 
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
     }, []);

  const [status, setStatus] = useState({});

  const video = require("../assets/back3.mp4");

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Hello, sky!</Text>
            </ImageBackground>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text2}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.8,
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1b3b52',
    backgroundColor:'rgba(255, 255, 255, .4)',
    position: 'absolute',
    bottom: 30,
    // height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    //opacity: .95,
  },
  buttonText: {
    color: "#C49D43",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
