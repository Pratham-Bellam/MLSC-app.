import { router } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Team() {
  const members = [
    require("mlsc-app/assets/images/member1.jpeg"),
    require("mlsc-app/assets/images/member2.jpeg"),
    require("mlsc-app/assets/images/member3.jpeg"),
    require("mlsc-app/assets/images/member4.jpeg"),
    require("mlsc-app/assets/images/member5.jpeg"),
    require("mlsc-app/assets/images/member6.jpeg"),
    require("mlsc-app/assets/images/member7.jpeg"),
    require("mlsc-app/assets/images/member8.jpeg"),
    require("mlsc-app/assets/images/member9.jpeg"),
    require("mlsc-app/assets/images/member10.jpeg"),
    require("mlsc-app/assets/images/member11.jpeg"),
    require("mlsc-app/assets/images/member12.jpeg"),
    require("mlsc-app/assets/images/member13.jpeg"),
    require("mlsc-app/assets/images/member14.jpeg"),
    require("mlsc-app/assets/images/member15.jpeg"),
    require("mlsc-app/assets/images/member16.jpeg"),
    require("mlsc-app/assets/images/member17.jpeg"),
    require("mlsc-app/assets/images/member18.jpeg"),
    require("mlsc-app/assets/images/member19.jpeg"),
    require("mlsc-app/assets/images/member20.jpeg"),
    require("mlsc-app/assets/images/member21.jpeg"),
    require("mlsc-app/assets/images/member22.jpeg"),
    require("mlsc-app/assets/images/member23.jpeg"),
    require("mlsc-app/assets/images/member24.jpeg"),
    require("mlsc-app/assets/images/member25.jpeg"),
    require("mlsc-app/assets/images/member26.jpeg"),
    require("mlsc-app/assets/images/member27.jpeg"),
    require("mlsc-app/assets/images/member28.jpeg"),
    require("mlsc-app/assets/images/member29.jpeg"),
    require("mlsc-app/assets/images/member30.jpeg"),
    require("mlsc-app/assets/images/member31.jpeg"),
    require("mlsc-app/assets/images/member32.jpeg"),
    require("mlsc-app/assets/images/member33.jpeg"),
    require("mlsc-app/assets/images/member34.jpeg"),
    require("mlsc-app/assets/images/member35.jpeg"),
    require("mlsc-app/assets/images/member36.jpeg"),
    require("mlsc-app/assets/images/member37.jpeg"),
    require("mlsc-app/assets/images/member38.jpeg"),
    require("mlsc-app/assets/images/member39.jpeg"),
    require("mlsc-app/assets/images/member40.jpeg"),
    require("mlsc-app/assets/images/member41.jpeg"),
    require("mlsc-app/assets/images/member42.jpeg"),
    require("mlsc-app/assets/images/member43.jpeg"),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <View>
          <Text style={styles.title}>Our Team</Text>
          <Text style={styles.subtitle}>MLSC VCET Members</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      >
        {members.map((image, index) => (
          <View style={styles.memberCard} key={index}>
            <Image
              source={image}
              style={styles.memberImage}
              resizeMode="cover"
            />

            <Text style={styles.memberName}>Member {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    paddingTop: 55,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F2F7FC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  backText: {
    color: "#0078D4",
    fontSize: 32,
    lineHeight: 34,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#111111",
  },

  subtitle: {
    fontSize: 13,
    color: "#777777",
    marginTop: 3,
  },

  grid: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  memberCard: {
    width: "48%",
    backgroundColor: "#F7F9FC",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
  },

  memberImage: {
    width: "100%",
    height: 210,
  },

  memberName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    padding: 12,
  },
});
