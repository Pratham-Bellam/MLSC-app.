import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MLSC</Text>

      <View style={styles.content}>
        <Text style={styles.title}>Microsoft Learn</Text>
        <Text style={styles.subtitle}>Student Club</Text>

        <Text style={styles.description}>Learn. Build. Connect.</Text>

        <Pressable style={styles.button} onPress={() => router.push("/login")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
  },

  content: {
    alignItems: "center",
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 20,
    marginTop: 5,
  },

  description: {
    fontSize: 16,
    marginTop: 20,
  },

  button: {
    marginTop: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#0078D4",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
