import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function EventDetails() {
  const { id } = useLocalSearchParams();

  const events = {
    "1": {
      image: require("mlsc-app/assets/images/event1.jpeg"),
      name: "MLSC Technical Workshop",
      date: "August 2026",
      venue: "VCET",
      description:
        "Join MLSC VCET for an engaging technical workshop where students can learn new technologies, explore practical concepts and interact with fellow developers.",
    },

    "2": {
      image: require("mlsc-app/assets/images/event2.jpeg"),
      name: "MLSC Hackathon",
      date: "September 2026",
      venue: "VCET Campus",
      description:
        "A collaborative hackathon where students can work together, solve problems and turn their ideas into working projects.",
    },

    "3": {
      image: require("mlsc-app/assets/images/event3.jpeg"),
      name: "Developer Community Meetup",
      date: "October 2026",
      venue: "VCET",
      description:
        "Connect with fellow students, discuss technology and discover new opportunities to learn and build together.",
    },
  };

  const event = events[id as keyof typeof events] || events["1"];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={event.image} style={styles.image} resizeMode="cover" />

          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>‹</Text>
          </Pressable>
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>MLSC EVENT</Text>

          <Text style={styles.title}>{event.name}</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📅</Text>

              <View>
                <Text style={styles.infoLabel}>DATE</Text>
                <Text style={styles.infoText}>{event.date}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📍</Text>

              <View>
                <Text style={styles.infoLabel}>VENUE</Text>
                <Text style={styles.infoText}>{event.venue}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About the Event</Text>

          <Text style={styles.description}>{event.description}</Text>

          <Pressable style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Event</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 280,
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    color: "#0078D4",
    fontSize: 32,
    lineHeight: 34,
  },

  content: {
    padding: 24,
  },

  label: {
    color: "#0078D4",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.4,
  },

  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800",
    color: "#111111",
    marginTop: 8,
  },

  infoCard: {
    backgroundColor: "#F5F8FB",
    borderRadius: 18,
    padding: 18,
    marginTop: 22,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  infoIcon: {
    fontSize: 20,
    marginRight: 14,
  },

  infoLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#888888",
  },

  infoText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222222",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#111111",
    marginTop: 28,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#666666",
    marginTop: 10,
  },

  joinButton: {
    backgroundColor: "#0078D4",
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },

  joinButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
