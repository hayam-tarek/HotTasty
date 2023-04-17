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
    <View style={styles.container}>
      <StatusBar hidden />
      <Video
        source={video}
        style={styles.video}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'gray',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 40,
    height: 40,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: .95
  },
  buttonText: {
    color: 'gray',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
