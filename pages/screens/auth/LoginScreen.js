import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/action/userAction";
const dimensions = Dimensions.get("screen");
const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    dispatch(loginUser(data, Toast, navigation));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Toast position="bottom" bottomOffset={20} />
      <View style={styles.loginCard}>
        <Text style={styles.loginCardTitle}>Şimdi Giriş yap</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email giriniz"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={styles.errorText}>Email zorunludur.</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Şifre giriniz"
              style={styles.input}
              secureTextEntry={true}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>Şifre zorunludur.</Text>
        )}

        <View style={styles.loginCardRow}>
          <Text style={styles.loginCardRowText}>Giriş</Text>
          <Pressable onPress={handleSubmit(onSubmit)}>
            <View style={styles.loginCardIconContainer}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
            </View>
          </Pressable>
        </View>
        <Pressable style={styles.presBtn}>
          <Text style={styles.presText}>Parolanızı mı unuttunuz?</Text>
        </Pressable>
      </View>
      <View style={[{ marginTop: 30 }, styles.loginCardRow]}>
        <Text style={{ marginRight: 8, color: "#fff", fontSize: 14 }}>
          Hesabınız yok mu?
        </Text>
        <Text style={{ color: "#fff", fontSize: 14 }}>Kayıt ol</Text>
        <View style={styles.registerContainer}>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
  },
  loginCard: {
    width: dimensions.width / 1.2,
    height: dimensions.height / 1.8,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  loginCardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1DA1F2",
    marginBottom: 30,
  },
  input: {
    width: dimensions.width / 1.5,
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 7,
    marginBottom: 20,
  },
  loginCardRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginCardRowText: {
    fontSize: 25,
    color: "#1DA1F2",
    fontWeight: "bold",
  },
  loginCardIconContainer: {
    width: dimensions.width / 6.5,
    height: dimensions.height / 14,
    backgroundColor: "#3F51B5",
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  presBtn: {
    marginTop: 20,
  },
  presText: {
    fontSize: 14,
  },
  registerContainer: {
    width: dimensions.width / 8.5,
    height: dimensions.height / 15,
    backgroundColor: "#5C6BC0",
    marginLeft: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
});

export default LoginScreen;
