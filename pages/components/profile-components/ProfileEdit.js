import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { updateBannerAndImage } from "../../../services/auth/authService";
import Toast from "react-native-toast-message";
const dimensions = Dimensions.get("screen");
const ProfileEdit = ({ navigation, user }) => {
  const [userForm, setUserForm] = useState({
    fullname: "",
    image: "",
    banner: "",
  });

  const handleUpdateBanner = async () => {
    const resultPermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (resultPermission.granted == false) {
      return;
    }

    const permissionImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (permissionImage.cancelled) {
      return;
    }
    let base64Image = `data:image/jpg;base64,${permissionImage.base64}`;
    setUserForm({ ...userForm, banner: base64Image });
  };

  const handleUserImage = async () => {
    const resultPermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (resultPermission.granted == false) {
      return;
    }

    const permissionImage = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (permissionImage.cancelled) {
      return;
    }
    let base64Image = `data:image/jpg;base64,${permissionImage.base64}`;
    setUserForm({ ...userForm, image: base64Image });
  };
  function handleSaveButton() {
    updateBannerAndImage(userForm)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Kayıt işlemi başarılı",
        });
        setTimeout(() => {
          navigation.navigate("Profile");
        }, 500);
      })
      .catch((err) => console.log(err));
  }
  return (
    <SafeAreaView style={styles.container}>
      <Toast position="bottom" bottomOffset={20} />
      <View style={styles.bannerContainer}>
        <Ionicons name="arrow-back" size={25} color="black" />
        <Text style={styles.bannerTitle}>Profili düzenle</Text>
        <TouchableOpacity onPress={handleSaveButton}>
          <Text style={styles.bannerTitle2}>Kaydet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.updateBannerImageContainer}>
        <TouchableOpacity onPress={handleUpdateBanner}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {user && user.image ? (
          <Image source={{ uri: user?.image?.url }} style={styles.images} />
        ) : (
          <Image
            source={require("../../../assets/person.png")}
            style={styles.images}
          />
        )}

        <TouchableOpacity onPress={handleUserImage}>
          <MaterialCommunityIcons
            name="camera-plus"
            style={{ left: 30, top: -70 }}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 15, color: "#333" }}>İsim</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserForm({ ...userForm, fullname: text })}
        />
        <Text style={{ fontSize: 15, color: "#333", marginTop: 30 }}>
          Kişisel Bilgiler
        </Text>
        <TextInput multiline style={[{ padding: 20 }, styles.input]} />
        <Text style={{ fontSize: 15, color: "#333", marginTop: 30 }}>
          Konum
        </Text>
        <TextInput style={styles.input} />
        <Text style={{ fontSize: 15, color: "#333", marginTop: 30 }}>
          Doğum tarihi
        </Text>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 10,
  },
  bannerTitle: {
    marginRight: -15,
    fontSize: 18,
    fontWeight: "600",
  },
  bannerTitle2: {
    fontSize: 16,
    fontWeight: "400",
  },
  updateBannerImageContainer: {
    width: dimensions.width,
    height: dimensions.height / 6,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    top: 130,
    left: 15,
  },
  images: {
    borderWidth: 6,
    borderColor: "#fff",
    borderRadius: 50,
    width: dimensions.width / 4,
    height: dimensions.height / 7,
  },
  inputContainer: {
    marginTop: 70,
    marginLeft: 15,
    marginRight: 10,
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.3)",
    padding: 10,
  },
});
export default ProfileEdit;
