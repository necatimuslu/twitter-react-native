import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/action/userAction";
import Toast from "react-native-toast-message";
const dimensions = Dimensions.get("screen");
const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    dispatch(registerUser(data, Toast, navigation));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Toast position="bottom" bottomOffset={20} />
      <View style={styles.registerCard}>
        <Text style={styles.registerCardTitle}>Şimdi Hesap oluştur</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Ad Soyad giriniz"
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={styles.errorText}>Ad soyad zorunludur.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Kullanıcı adı giriniz"
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="username"
        />
        {errors.username && (
          <Text style={styles.errorText}>Kullanıcı adı zorunludur.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email giriniz"
              style={styles.input}
              value={value}
              onChangeText={onChange}
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
              value={value}
              onChangeText={onChange}
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={styles.errorText}>Şifre zorunludur.</Text>
        )}

        <Pressable style={styles.presBtn} onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Kayıt ol
          </Text>
        </Pressable>
      </View>
      <View style={[{ marginTop: 30 }, styles.loginCardRow]}>
        <Text style={{ marginRight: 8, color: "#fff", fontSize: 14 }}>
          Hesabınız var mı?
        </Text>
        <Text style={{ color: "#fff", fontSize: 14 }}>Giriş</Text>
        <View style={styles.registerContainer}>
          <Pressable onPress={() => navigation.navigate("Login")}>
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
  registerCard: {
    width: dimensions.width / 1.2,
    height: dimensions.height / 1.6,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  registerCardTitle: {
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
    marginBottom: 25,
  },
  presBtn: {
    marginTop: 10,
    width: dimensions.width / 1.8,
    height: dimensions.height / 20,
    backgroundColor: "#3949AB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
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
  loginCardRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
});
export default RegisterScreen;
