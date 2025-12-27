// Login screen using React Hook Form for phone number input
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../src/store/authSlice";
import * as SecureStore from "expo-secure-store";
import { login as loginApi } from "../../src/api/auth.api";

export default function Login() {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = React.useState("");

  const onSubmit = async (data) => {
    setError("");
    if (!data.phone) {
      setError("Phone number is required");
      return;
    }
    try {
      const res = await loginApi(data.phone);
      // If backend sends OTP, redirect to OTP screen
      if (res.data.otpSent) {
        router.replace({ pathname: "/otp", params: { phone: data.phone } });
      } else if (res.data.token && res.data.user) {
        await SecureStore.setItemAsync("jwt", res.data.token);
        dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
        router.replace("/(tabs)/chats");
      }
    } catch (e) {
      setError(e?.response?.data?.message || "Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="phone"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
          />
        )}
      />
      {error ? (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/signin")}>
        <Text style={styles.link}>Sign In with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/signup")}>
        <Text style={styles.link}>Create a new account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    color: "#007AFF",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
  },
});
