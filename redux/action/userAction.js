import { GET_ALL_USER, LOGIN } from "../constants/authConstants";
import * as api from "../../services/auth/authService";
import { setUserToken } from "../../asyncstorage";
import { baseUrl } from "../../services/common/api";
import axios from "axios";

export const currentUser = async () => {
  return await axios.post(`${baseUrl}/user/current-user`, {});
};

export const getallUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUser();

    dispatch({
      type: GET_ALL_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userForm, Toast, navigation) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userForm);

    dispatch({
      type: LOGIN,
      payload: data,
    });

    Toast.show({
      type: "success",
      text1: "Başarılı",
      text2: "Kayıt işlemi başarılı",
    });
    storageUserData(data.token);

    async function storageUserData(userData) {
      await setUserToken("@auth", userData);
    }
    setTimeout(() => {
      navigation.navigate("Anasayfa");
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export const registerUser =
  (userForm, Toast, navigation) => async (dispatch) => {
    try {
      const { data } = await api.registerUser(userForm);

      dispatch({
        type: LOGIN,
        payload: data,
      });
      Toast.show({
        type: "success",
        text1: "Başarılı",
        text2: "Kayıt işlemi başarılı",
      });
      storageUserData(data.token);

      async function storageUserData(userData) {
        await setUserToken("@auth", userData);
      }
      setTimeout(() => {
        navigation.navigate("Anasayfa");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
