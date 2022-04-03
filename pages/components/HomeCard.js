import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { likesTweet } from "../../services/tweetService";
const dimensions = Dimensions.get("screen");
export default function HomeCard({ t, navigation }) {
  const [image, setImage] = useState(true);
  const handleLike = () => {
    likesTweet({ tweetId: t._id })
      .then(() => {
        Toast.show({
          type: "info",
          text1: "Başarılı",
          text2: "Tweet beğenildi",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Toast position="bottom" bottomOffset={20} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Friend Profile", {
              t: t.userId,
              userId: t.userId._id,
            })
          }
        >
          {t && t.image && t.image.url ? (
            <Image source={{ uri: t?.image?.url }} style={styles.image} />
          ) : (
            <Image
              source={require("../../assets/saat.jpeg")}
              style={styles.image}
            />
          )}
        </TouchableOpacity>
        <View>
          <View style={styles.row}>
            <Text style={{ marginRight: 7, fontWeight: "bold" }}>
              Necati Muslu
            </Text>
            <Text style={{ marginRight: 7 }}>@necatimu</Text>
            <Text style={{ marginRight: 7 }}>1 gün</Text>
            <Pressable style={{ marginLeft: dimensions.width / 6 }}>
              <Entypo name="dots-three-vertical" size={18} color="grey" />
            </Pressable>
          </View>
          <View style={styles.tweetText}>
            <Text
              style={{
                marginRight: dimensions.width / 6,
              }}
            >
              {t?.description}
            </Text>
            {image && (
              <Image
                source={{ uri: t?.image?.url }}
                style={styles.tweetImage}
              />
            )}

            <View style={styles.iconContainer}>
              <Feather name="message-circle" size={22} color="grey" />
              <MaterialCommunityIcons
                name="twitter-retweet"
                size={24}
                color="grey"
              />
              <TouchableOpacity onPress={handleLike}>
                <AntDesign name="hearto" size={22} color="grey" />
                <Text>{t?.likes?.lenght}</Text>
              </TouchableOpacity>

              <EvilIcons name="share-google" size={24} color="grey" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.3)",
  },
  container2: {
    flexDirection: "row",
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: dimensions.width / 7,
    height: dimensions.height / 12,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "rgba(0,0,0,0.3)",
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 4,
  },
  tweetText: {
    paddingVertical: 10,
    marginTop: -20,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
  tweetImage: {
    width: dimensions.width / 1.5,
    height: dimensions.height / 4,
    marginRight: 30,
    resizeMode: "contain",
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: "rgba(0,0,0,0.1)",
    marginTop: 5,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: dimensions.width / 1.8,
    marginLeft: 15,
  },
});
