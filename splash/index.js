import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonComponent from "../src/components/ButtonComponent";
import route from "../src/routes/route";
const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <ButtonComponent
        name={"SIGN IN"}
        onPress={() => navigation.navigate(route.login)}
      />
      <ButtonComponent
        name={"SIGN UP"}
        onPress={() => navigation.navigate(route.signup)}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
