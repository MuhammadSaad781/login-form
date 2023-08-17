import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import * as Font from "expo-font";
import LottieView from "lottie-react-native";
import ButtonComponent from "../src/components/ButtonComponent";
import route from "../src/routes/route";
const SplashScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      CircularStd: require("../src/assets/CircularStd.ttf"),
    });
  }

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        navigation.navigate(route.login); // Replace 'NewScreen' with the name of your new screen
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, navigation]);

  if (!fontsLoaded) {
    return <ActivityIndicator />; // You might need to import AppLoading from 'expo' or 'expo-app-loading'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sauda Don</Text>
      <LottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
        source={require("../src/assets/loading.json")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ec5990",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  text1: {
    fontFamily: "CircularStd",
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
});
