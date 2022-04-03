import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const dimensions = Dimensions.get("screen");
import { getUserById } from "../../../services/auth/authService";
import moment from "moment";
import ProfileEdit from "../../components/profile-components/ProfileEdit";
const Profile = ({ navigation }) => {
  const [user, setUser] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getUserById()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Feather name="arrow-left" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.topLeftBtn2}>
          <TouchableOpacity>
            <Ionicons
              name="ellipsis-vertical-circle-sharp"
              color="#333"
              style={{ fontSize: 38 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <View style={styles.stackImage}>
          {user && user.image ? (
            <Image source={{ uri: user?.image?.url }} style={styles.image} />
          ) : (
            <Image
              source={require("../../../assets/person.png")}
              style={styles.image}
            />
          )}
        </View>
      </View>
      <View style={styles.prlBtn}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Porfili düzenle</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{user?.username}</Text>
      </View>
      <View style={styles.textContainer2}>
        <Text style={styles.titleText2}>{`@${user?.email}`}</Text>
      </View>
      <View style={styles.desContainer}>
        <View style={styles.birtdayContainer}>
          <MaterialCommunityIcons
            name="airballoon-outline"
            size={22}
            color="black"
          />
          <Text style={{ paddingLeft: 3, fontSize: 15 }}>Doğum tarihi :</Text>
          <Text style={{ fontSize: 15 }}>5 Ağustos 1994</Text>
        </View>
      </View>
      <View style={styles.desContainer2}>
        <View style={styles.birtdayContainer}>
          <Fontisto name="date" size={20} color="black" />
          <Text style={{ paddingLeft: 3, fontSize: 15 }}>
            <Text style={{ marginRight: 2 }}>Tarihinde katıldı :</Text>
            {moment(user?.createdAt).format("MMM Do YYYY, h:mm:ss a")}
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          marginTop: 25,
          marginLeft: 10,
          marginRight: 10,
          height: dimensions.height / 35,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Pressable>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tweetler</Text>
        </Pressable>
        <Pressable>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 30 }}>
            Tweetler ve yanıtlar
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 30 }}>
            Medya
          </Text>
        </Pressable>
        <Pressable>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 30,
            }}
          >
            Beğeniler
          </Text>
        </Pressable>
      </ScrollView>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
          Kimi takip etmeli
        </Text>
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row", marginBottom: 20 }}>
        <ScrollView
          contentContainerStyle={{ flexDirection: "row" }}
          showsHorizontalScrollIndicator={true}
          horizontal
        >
          <View style={styles.friendCard}>
            <AntDesign style={styles.cardClose} name="close" size={20} />
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../../../assets/person.png")}
                style={styles.cardImage}
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Necati</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Muslu</Text>
              <Text style={{ fontSize: 13, marginTop: 5 }}>@necatimuslu</Text>
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  Takip et
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.friendCard}>
            <AntDesign style={styles.cardClose} name="close" size={20} />
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../../../assets/person.png")}
                style={styles.cardImage}
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Necati</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Muslu</Text>
              <Text style={{ fontSize: 13, marginTop: 5 }}>@necatimuslu</Text>
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  Takip et
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.friendCard}>
            <AntDesign style={styles.cardClose} name="close" size={20} />
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../../../assets/person.png")}
                style={styles.cardImage}
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Necati</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Muslu</Text>
              <Text style={{ fontSize: 13, marginTop: 5 }}>@necatimuslu</Text>
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  Takip et
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.friendCard}>
            <AntDesign style={styles.cardClose} name="close" size={20} />
            <View style={styles.cardImageContainer}>
              <Image
                source={require("../../../assets/person.png")}
                style={styles.cardImage}
              />
            </View>
            <View
              style={{
                alignSelf: "center",
                marginTop: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Necati</Text>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Muslu</Text>
              <Text style={{ fontSize: 13, marginTop: 5 }}>@necatimuslu</Text>
            </View>
            <View style={styles.cardBtn}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#fff",
                    alignSelf: "center",
                  }}
                >
                  Takip et
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable style={{ flex: 1 }} onPress={() => setModalVisible(false)}>
          <ProfileEdit navigation={navigation} user={user} />
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: dimensions.width,
    height: dimensions.height / 6,
    backgroundColor: "#1DA1F2",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topLeftBtn: {
    marginTop: 25,
    backgroundColor: "#343434",
    marginLeft: 10,
    width: dimensions.width / 12,
    height: dimensions.height / 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  topLeftBtn2: {
    marginTop: 25,

    marginRight: 15,
    width: dimensions.width / 11,
    height: dimensions.height / 18,

    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: dimensions.width / 4.7,
    height: dimensions.height / 8.7,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  stackImage: {
    position: "absolute",
    top: -30,
    left: 20,
  },
  prlBtn: {
    top: dimensions.height / 5.6,
    left: dimensions.width / 1.6,
    position: "absolute",
    width: dimensions.width / 3,
    borderWidth: 0.5,
    borderRadius: 40,
    height: dimensions.height / 18,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 55,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textContainer2: {
    marginLeft: 10,
  },
  titleText2: {
    fontSize: 18,
  },
  desContainer: {
    marginTop: 30,
    marginLeft: 10,
  },

  birtdayContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  desContainer2: {
    marginTop: 10,
    marginLeft: 10,
  },
  friendCard: {
    marginTop: 15,
    marginLeft: 5,
    width: dimensions.width / 2.5,
    height: dimensions.height / 2.8,

    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.3)",
  },
  cardClose: {
    alignSelf: "flex-end",
    marginRight: 15,
    marginTop: 5,
    color: "#9E9E9E",
  },
  cardImageContainer: {
    marginTop: 7,
    alignSelf: "center",
    width: dimensions.width / 4,
    height: dimensions.height / 6.5,
  },
  cardImage: {
    resizeMode: "cover",
    width: dimensions.width / 4.1,
    height: dimensions.height / 7.6,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
  },
  cardBtn: {
    width: dimensions.width / 3.2,
    height: dimensions.height / 25,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 5,
  },
});

export default Profile;
