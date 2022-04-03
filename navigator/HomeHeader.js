import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const dimensions = Dimensions.get("screen");
const HomeHeader = () => {
  const { users } = useSelector((state) => ({ ...state }));
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container2}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Avatar
          size={30}
          rounded
          source={require("../assets/person.png")}
          icon={{ name: "pencil", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#6733b9", marginLeft: 10 }}
        />
      </TouchableOpacity>

      <AntDesign name="twitter" size={26} color="#1DA1F2" />
      <MaterialIcons
        name="stars"
        size={30}
        color="black"
        style={{ marginRight: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "#fff",
    height: dimensions.height / 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});

export default HomeHeader;
