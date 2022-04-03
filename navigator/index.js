import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../pages/screens/auth/LoginScreen";
import RegisterScreen from "../pages/screens/auth/RegisterScreen";
import HomeScreen from "../pages/screens/HomeScreen";
import WelcomeScreen from "../pages/screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderTopRight from "./HeaderTopRight";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { currentUser } from "../redux/action/userAction";
import { LOGIN } from "../redux/constants/authConstants";
import { useEffect } from "react";
import Profile from "../pages/screens/bottom-pages/Profile";
import HomeHeader from "./HomeHeader";
import FriendProfile from "../pages/screens/FriendProfile";

const AuthStack = createNativeStackNavigator();

export default function AppNavigation() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({ ...state }));
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    users && users?.token
  }`;

  useEffect(() => {
    users && users
      ? currentUser(users && users.token).then((res) => {
          dispatch({
            type: LOGIN,
            payload: {
              email: res?.data?.email,
              role: res?.data?.role,
              _id: res?.data?._id,
              token: users?.token,
            },
          });
        })
      : null;
  }, []);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {users && users.token && (
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => <HomeHeader /> }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Friend Profile"
            component={FriendProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
      {!users && (
        <AuthStack.Navigator initialRouteName="Welcome">
          <AuthStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              headerRight: () => <HeaderTopRight />,
            }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              headerRight: () => <HeaderTopRight />,
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
