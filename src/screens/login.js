import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import ButtonComponent from "../components/ButtonComponent";
const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const isLoading = false;
  function handleClick() {
    if (!Email) {
      alert("Please enter email!");
    } else if (!Password) {
      alert("Please enter password!");
    } else if (!(Email && Password)) {
      alert("Please enter password and email!");
    } else {
      console.log(Email, Password);
    }
  }
  return (
    <View>
      <Text>{Email}</Text>
      <Input
        label="Email"
        keyboardtype="email-address"
        onChangeText={(text) => setEmail(text)}
        value={Email}
      />
      <Input
        label={"Password"}
        securetextentry={true}
        onChangeText={(text) => setPassword(text)}
        value={Password}
      />

      <ButtonComponent name={"SIGN IN"} onPress={handleClick} loading={false} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
