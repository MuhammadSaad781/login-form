import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

import Input from "./src/components/Input";
import ButtonComponent from "./src/components/ButtonComponent";
import SignUp from "./src/screens/signUp";
import Login from "./src/screens/login";
import SplashScreen from "./splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import route from "./src/routes/route";
const Stack = createNativeStackNavigator();

export default function App() {
  const isLoading = false;
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={route.main}
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={route.login}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={route.signup}
            component={SignUp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 15,
  },
});
