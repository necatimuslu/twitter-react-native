import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserToken = async (key, token) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(token));
  } catch (error) {
    console.log(error);
  }
};

export const getUserToken = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = async () => await AsyncStorage.removeItem(key);
