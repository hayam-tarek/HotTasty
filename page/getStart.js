import React, { useState } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar,Image } from 'react-native';

export default function GetStart({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
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
    justifyContent: 'center',
    flexDirection: 'column',
    // //justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems: "center",
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  button: {
    width: "60%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#042628',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: -190,
    // marginTop: -60,
    marginBottom: 15,
    backgroundColor: 'rgba(67, 111, 114, .1)',
    padding:10,
    marginTop:300
  },
  buttonText: {
    color: '#rgba(67, 111, 114, .8)',
    fontSize: 30,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  image: {
    width: 400,
    height: 200,
    marginTop:-100

},
});
