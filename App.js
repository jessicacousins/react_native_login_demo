import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Image source={require("./assets/leafLogo.png")} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.mainLogin}>Please Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#fff"
          value={password}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
        />

        <View style={styles.checkboxMain}>
          <TouchableWithoutFeedback
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <View style={styles.checkbox}>
              {isPasswordVisible && <View style={styles.checkboxInner} />}
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.textPassword}>Show Password</Text>
        </View>

        <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#212121",
  },
  topContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  welcome: {
    fontSize: 44,
    color: "#fff",
    marginTop: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -90,
  },
  mainLogin: {
    fontSize: 24,
    marginBottom: 20,
    color: "#fff",
  },
  input: {
    width: "80%",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "#fff",
  },
  checkboxMain: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    color: "#fff",
  },
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    color: "#fff",
  },
  checkboxInner: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    color: "#fff",
  },
  textPassword: {
    fontSize: 16,
    color: "#fff",
  },
  loginbuttonText: {
    color: "#fff",
    fontSize: 20,
  },
  loginbutton: {
    backgroundColor: "#1d9bf6",
    padding: 13,
    borderRadius: 5,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
});
