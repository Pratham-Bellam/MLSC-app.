import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
    Animated,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const events = [
    {
      id: "1",
      image: require("mlsc-app/assets/images/event1.jpeg"),
      name: "MLSC Technical Workshop",
      date: "August 2026",
      venue: "VCET",
    },
    {
      id: "2",
      image: require("mlsc-app/assets/images/event2.jpeg"),
      name: "MLSC Hackathon",
      date: "September 2026",
      venue: "VCET Campus",
    },
    {
      id: "3",
      image: require("mlsc-app/assets/images/event3.jpeg"),
      name: "Developer Community Meetup",
      date: "October 2026",
      venue: "VCET",
    },
  ];

  const teamMembers = [
    {
      image: require("mlsc-app/assets/images/member1.jpeg"),
      name: "Member 1",
    },
    {
      image: require("mlsc-app/assets/images/member2.jpeg"),
      name: "Member 2",
    },
    {
      image: require("mlsc-app/assets/images/member3.jpeg"),
      name: "Member 3",
    },
    {
      image: require("mlsc-app/assets/images/member4.jpeg"),
      name: "Member 4",
    },
    {
      image: require("mlsc-app/assets/images/member5.jpeg"),
      name: "Member 5",
    },
    {
      image: require("mlsc-app/assets/images/member6.jpeg"),
      name: "Member 6",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HERO */}
      <Animated.View
        style={[
          styles.hero,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.heroTop}>
          <Image
            source={require("mlsc-app/assets/images/logo.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>P</Text>
          </View>
        </View>

        <Text style={styles.heroSmall}>WELCOME TO</Text>

        <Text style={styles.heroTitle}>Microsoft Learn{"\n"}Student Club</Text>

        <Text style={styles.heroSubtitle}>Learn. Build. Connect.</Text>

        <Text style={styles.heroDescription}>
          A community where students explore technology, build projects and grow
          together.
        </Text>

        <Pressable style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Explore Events →</Text>
        </Pressable>
      </Animated.View>

      {/* EVENTS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>

        <Text style={styles.sectionSubtitle}>
          Discover what's happening at MLSC
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {events.map((event) => (
            <View style={styles.eventCard} key={event.id}>
              <Image
                source={event.image}
                style={styles.eventImage}
                resizeMode="cover"
              />

              <View style={styles.eventContent}>
                <Text style={styles.eventName}>{event.name}</Text>

                <Text style={styles.eventInfo}>📅 {event.date}</Text>

                <Text style={styles.eventInfo}>📍 {event.venue}</Text>

                <Pressable
                  style={styles.eventButton}
                  onPress={() => router.push(`/event?id=${event.id}`)}
                >
                  <Text style={styles.eventButtonText}>View Details</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* WHAT WE DO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Do</Text>

        <Text style={styles.sectionSubtitle}>
          Helping students learn, create and connect.
        </Text>

        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>💻</Text>

            <Text style={styles.featureTitle}>Learn</Text>

            <Text style={styles.featureText}>
              Workshops and sessions to learn modern technologies.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🚀</Text>

            <Text style={styles.featureTitle}>Build</Text>

            <Text style={styles.featureText}>
              Turn your ideas into real projects and experiences.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🤝</Text>

            <Text style={styles.featureTitle}>Connect</Text>

            <Text style={styles.featureText}>
              Meet students and technology enthusiasts.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🏆</Text>

            <Text style={styles.featureTitle}>Grow</Text>

            <Text style={styles.featureText}>
              Participate in competitions and improve your skills.
            </Text>
          </View>
        </View>
      </View>

      {/* ABOUT */}
      <View style={styles.aboutCard}>
        <Text style={styles.aboutLabel}>ABOUT MLSC</Text>

        <Text style={styles.aboutTitle}>More than a club.</Text>

        <Text style={styles.aboutText}>
          MLSC VCET is a student community focused on technology, collaboration
          and continuous learning. We provide opportunities for students to
          explore technologies and build meaningful projects.
        </Text>
      </View>

      {/* TEAM */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Our Team</Text>

            <Text style={styles.sectionSubtitle}>Meet the MLSC VCET team</Text>
          </View>

          <Pressable onPress={() => router.push("/team")}>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {teamMembers.map((member, index) => (
            <View style={styles.teamCard} key={index}>
              <Image
                source={member.image}
                style={styles.teamImage}
                resizeMode="cover"
              />

              <Text style={styles.teamName}>{member.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* JOIN US */}
      <View style={styles.joinCard}>
        <Text style={styles.joinTitle}>Ready to be part of MLSC?</Text>

        <Text style={styles.joinText}>
          Learn something new, meet great people and build something meaningful.
        </Text>

        <Pressable style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join MLSC</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>MLSC VCET • Learn. Build. Connect.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  hero: {
    backgroundColor: "#0078D4",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 36,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 45,
  },

  logo: {
    width: 80,
    height: 50,
  },

  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#0078D4",
    fontSize: 17,
    fontWeight: "800",
  },

  heroSmall: {
    color: "#DCEEFF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "800",
    marginTop: 8,
  },

  heroSubtitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "600",
    marginTop: 14,
  },

  heroDescription: {
    color: "#E8F4FF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  heroButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 24,
  },

  heroButtonText: {
    color: "#0078D4",
    fontSize: 14,
    fontWeight: "700",
  },

  section: {
    paddingHorizontal: 24,
    marginTop: 32,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: "800",
    color: "#111111",
  },

  sectionSubtitle: {
    fontSize: 13,
    color: "#777777",
    marginTop: 5,
  },

  viewAll: {
    color: "#0078D4",
    fontSize: 13,
    fontWeight: "700",
  },

  horizontalScroll: {
    paddingTop: 18,
    paddingBottom: 5,
  },

  eventCard: {
    width: 275,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginRight: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  eventImage: {
    width: "100%",
    height: 155,
  },

  eventContent: {
    padding: 16,
  },

  eventName: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111111",
    marginBottom: 10,
  },

  eventInfo: {
    fontSize: 13,
    color: "#666666",
    marginTop: 5,
  },

  eventButton: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#0078D4",
    borderRadius: 9,
    paddingVertical: 10,
    alignItems: "center",
  },

  eventButtonText: {
    color: "#0078D4",
    fontSize: 13,
    fontWeight: "700",
  },

  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 18,
  },

  featureCard: {
    width: "48%",
    backgroundColor: "#F7F9FC",
    borderRadius: 16,
    padding: 17,
    marginBottom: 12,
  },

  featureIcon: {
    fontSize: 25,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: "800",
    marginTop: 10,
    color: "#111111",
  },

  featureText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#666666",
    marginTop: 6,
  },

  aboutCard: {
    marginHorizontal: 24,
    marginTop: 30,
    backgroundColor: "#F1F7FC",
    padding: 24,
    borderRadius: 22,
  },

  aboutLabel: {
    color: "#0078D4",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  aboutTitle: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 8,
    color: "#111111",
  },

  aboutText: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 21,
    marginTop: 10,
  },

  teamCard: {
    width: 145,
    backgroundColor: "#F7F9FC",
    borderRadius: 16,
    marginRight: 14,
    overflow: "hidden",
  },

  teamImage: {
    width: "100%",
    height: 165,
  },

  teamName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    padding: 12,
  },

  joinCard: {
    marginHorizontal: 24,
    marginTop: 30,
    backgroundColor: "#111111",
    padding: 24,
    borderRadius: 22,
  },

  joinTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },

  joinText: {
    color: "#CCCCCC",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  joinButton: {
    backgroundColor: "#0078D4",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  joinButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  footer: {
    textAlign: "center",
    color: "#999999",
    fontSize: 12,
    paddingVertical: 30,
  },
});
