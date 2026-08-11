import TransitionScreen from "@/components/transitionScreen";
import { router } from "expo-router";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showTransition, setShowTransition] = useState(false);

  const handleLogin = () => {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email or student ID.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    // Frontend-only flow
    setShowTransition(true);
  };

  if (showTransition) {
    return (
      <TransitionScreen
        message="Login Successful"
        subtitle="Opening your dashboard..."
        onFinish={() => router.replace("/home")}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>Login to continue</Text>

        <Text style={styles.label}>Email / Student ID</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter email or student ID"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError("");
          }}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError("");
            }}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.show}>{showPassword ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        {error !== "" && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => router.push("/signin")}>
            <Text style={styles.link}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111111",
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginTop: 8,
    marginBottom: 28,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222222",
    marginTop: 14,
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#111111",
  },

  passwordBox: {
    height: 52,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 14,
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#111111",
  },

  show: {
    color: "#0078D4",
    fontWeight: "600",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 12,
  },

  forgotText: {
    color: "#0078D4",
    fontWeight: "600",
  },

  error: {
    color: "#D32F2F",
    fontSize: 14,
    marginTop: 10,
  },

  button: {
    height: 52,
    backgroundColor: "#0078D4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },

  bottomText: {
    color: "#666666",
  },

  link: {
    color: "#0078D4",
    fontWeight: "600",
  },
});
