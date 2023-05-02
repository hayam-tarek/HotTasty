import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Log from "../assets/cold.png";

export default function Logo({ navigation }) {
  const opacity = new Animated.Value(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => navigation.navigate("GetStart"));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Animated.View
      style={{
        flex: 1,
        opacity,
      }}
    >
      <View style={styles.body}>
        <Image source={Log} style={styles.Logo} />
      </View>
      <StatusBar style="auto" />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 156,
    height: 66,
  },
});
