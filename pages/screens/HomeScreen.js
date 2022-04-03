import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const dimensions = Dimensions.get("screen");
import HomeCard from "../components/HomeCard";
import CreateTweetScreen from "./CreateTweetScreen";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTweet } from "../../redux/action/tweetAction";
const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { tweets } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    dispatch(fetchAllTweet());
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
      >
        {tweets &&
          tweets.map((t, i) => (
            <View key={i}>
              <HomeCard t={t} navigation={navigation} />
            </View>
          ))}

        {modalVisible && (
          <Modal
            animationType="fade"
            onRequestClose={() => setModalVisible(!modalVisible)}
            visible={modalVisible}
          >
            <Pressable
              style={{
                flex: 1,
              }}
              onPress={() => setModalVisible(false)}
            >
              <CreateTweetScreen setModalVisible={setModalVisible} />
            </Pressable>
          </Modal>
        )}

        <View style={styles.tweetBtnContainer}>
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: "flex-end" }}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons
              name="add"
              size={24}
              color="white"
              style={{ marginRight: -12, marginTop: -8 }}
            />
            <MaterialCommunityIcons name="feather" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tweetBtnContainer: {
    position: "absolute",
    top: dimensions.width / 0.8,
    left: dimensions.height / 2.4,
    backgroundColor: "#1DA1F2",
    height: dimensions.height / 11.5,
    width: dimensions.width / 6.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default HomeScreen;
