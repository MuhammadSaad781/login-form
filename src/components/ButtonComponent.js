import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";

const ButtonComponent = ({ name, ...props }) => {
  const isLoading = props.loading;
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    alignSelf: "center",
    color: "white",
  },
});
