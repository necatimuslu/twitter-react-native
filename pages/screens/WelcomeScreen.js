import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const dimensions = Dimensions.get("screen");
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Ionicons name="logo-twitter" size={50} color="white" />
        <Text
          style={{
            color: "#fff",

            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Twitter
        </Text>
      </View>
      <View style={styles.columContainer}>
        <Text
          style={{
            color: "#fff",

            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Şu anda olup
        </Text>
        <Text
          style={{
            color: "#fff",
            paddingLeft: 45,
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 5,
          }}
        >
          Bitenler
        </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <View style={styles.btnContainer}>
          <View style={styles.rowContainer}>
            <Text
              style={{
                color: "#fff",
                paddingLeft: 45,
                fontSize: 14,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Twitter a giriş yap
            </Text>
            <View style={styles.registerContainer}>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="white"
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.rowContainer}>
            <Text
              style={{
                color: "#fff",
                paddingLeft: 45,
                fontSize: 14,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Yeni hesap oluştur
            </Text>
            <View style={styles.registerContainer}>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="white"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  columContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  btnContainer: {
    marginTop: 10,
  },
  registerContainer: {
    width: dimensions.width / 8.5,
    height: dimensions.height / 15,
    backgroundColor: "#5C6BC0",
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;
