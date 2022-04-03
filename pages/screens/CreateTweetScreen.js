import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createTweet } from "../../services/tweetService";
import Toast from "react-native-toast-message";
const dimensions = Dimensions.get("screen");
const CreateTweetScreen = ({ setModalVisible }) => {
  const [tweetForm, setTweetForm] = useState({
    description: "",
    image: "",
  });
  const [uploadImage, setUploadImage] = useState("");

  const handleUpdateImage = async () => {
    const permissonResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissonResult.granted == false) {
      return;
    }
    const imagePermisson = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (imagePermisson.cancelled == true) {
      return;
    }
    let base64Image = `data:image/jpg;base64,${imagePermisson.base64}`;
    setTweetForm({ ...tweetForm, image: base64Image });
    setUploadImage(base64Image);
  };

  const handleSubmit = () => {
    createTweet(tweetForm)
      .then((data) => {
        setTweetForm({ description: "" });
        Toast.show({
          type: "success",
          text1: "Başarılı",
          text2: "Tweet başarılı",
        });
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <KeyboardAwareScrollView enableAutomaticScroll={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Pressable onPress={() => setModalVisible(false)}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>

          <Pressable style={styles.presBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Tweetle</Text>
          </Pressable>
        </View>
        <View style={styles.tweetSendContainer}>
          <Avatar
            size={35}
            rounded
            source={require("../../assets/person.png")}
            icon={{ name: "pencil", type: "font-awesome" }}
            containerStyle={{ backgroundColor: "#6733b9", marginLeft: 10 }}
          />
          <TextInput
            placeholder="Neler oluyor?"
            numberOfLines={5}
            style={styles.input}
            placeholderTextColor="#333"
            multiline={true}
            value={tweetForm.description}
            onChangeText={(text) =>
              setTweetForm({ ...tweetForm, description: text })
            }
          />
        </View>
        <View style={styles.bottomContainer}>
          <FontAwesome
            name="file-image-o"
            size={24}
            color="#1DA1F2"
            onPress={handleUpdateImage}
          />
          <MaterialIcons name="gif" size={24} color="#1DA1F2" />
          <MaterialIcons name="view-comfortable" size={24} color="#1DA1F2" />
          <EvilIcons name="location" size={24} color="#1DA1F2" />
          <Feather name="circle" size={24} color="#1DA1F2" />
          <Entypo name="circle-with-plus" size={24} color="#1DA1F2" />
        </View>
        <Toast position="bottom" bottomOffset={20} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  presBtn: {
    backgroundColor: "#1DA1F2",
    width: dimensions.width / 4.5,
    height: dimensions.height / 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  btnText: {
    fontWeight: "bold",
    color: "#fff",
  },
  tweetSendContainer: {
    flexDirection: "row",
  },
  input: {
    marginHorizontal: 10,
  },
  bottomContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    position: "absolute",
    padding: 10,
    top: dimensions.height / 1.9,
    borderTopColor: "rgba(0,0,0,0.3)",
    borderTopWidth: 0.3,
    width: dimensions.width / 1,
    alignItems: "center",
    marginTop: 5,
  },
});

export default CreateTweetScreen;
