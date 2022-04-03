import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const HeaderTopRight = ({ navigation }) => {
  console.log(navigation);
  const handleNavigation = () => navigation.goBack();
  return (
    <View>
      <TouchableOpacity onPress={handleNavigation}>
        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTopRight;
