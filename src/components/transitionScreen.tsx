import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
  subtitle: string;
  onFinish: () => void;
};

export default function TransitionScreen({
  message,
  subtitle,
  onFinish,
}: Props) {
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 50,
        useNativeDriver: true,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish, opacity, scale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={styles.check}>✓</Text>
      </Animated.View>

      <Animated.Text style={[styles.message, { opacity }]}>
        {message}
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity }]}>
        {subtitle}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },

  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0078D4",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },

  check: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
  },

  message: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 15,
    color: "#666666",
    marginTop: 8,
    textAlign: "center",
  },
});
