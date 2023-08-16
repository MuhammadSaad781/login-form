import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ButtonComponent from "./ButtonComponent";
export default function Input({ label, ...props }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        keyboardType={props.keyboardtype}
        secureTextEntry={props.securetextentry}
        style={[styles.input, props.error && styles.redinput]}
      />
      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  error: {
    color: "red",
    fontSize: 10,
    marginTop: 10,
  },
  redinput: {
    borderRadius: 4,
    borderColor: "red",
    borderWidth: 1,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 50,
    backgroundColor: "#ec5990",
    borderRadius: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonInner: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttontext: {
    color: "white",
  },
  greyline: {
    width: "100%",
    backgroundColor: "grey",
    height: 1,
    marginTop: 30,
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 25,
    alignSelf: "center",
  },
  text2: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
});
