import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);
  return (
    <View style={styles.container}>
      <View style={styles.elements}>
        <Text>SIGN UP</Text>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="Email"
          rules={{ required: true }}
        />
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="Password"
          rules={{ required: true }}
        />

        {/* <View style={styles.button}>
          <View
            style={styles.buttonInner}
            color
            title="Reset"
            onPress={() => {
              reset({
                firstName: "Bill",
                lastName: "Luo",
              });
            }}
          />
        </View> */}

        <View style={styles.button} onPress={handleSubmit(onSubmit)}>
          <TouchableOpacity
            style={styles.buttonInner}
            color
            title="Button"
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttontext}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.greyline}></View>
        <View style={styles.socials}>
          <AntDesign name="google" size={30} color="#ec5990" />
          <Entypo name="facebook-with-circle" size={30} color="blue" />
          <Entypo name="linkedin-with-circle" size={30} color="blue" />
        </View>
        <View style={styles.text2}>
          <Text>Already a user?</Text>
          <Text style={{ marginLeft: 10, textDecorationLine: "underline" }}>
            LOGIN
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 50,
    backgroundColor: "#ec5990",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 15,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 50,
    padding: 10,
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
