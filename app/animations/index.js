import { useRef } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import FadeInView from "../../lib/components/FadeInView";
import Btn from "../../lib/components/Btn";

export default function Animations() {
  const ballSize = useRef(new Animated.Value(20)).current; // Initial ball size

  const increaseSize = () => {
    // Calculate the new size
    const newSize = ballSize._value + 5;

    // Trigger the spring animation with updated configuration for a more lively effect
    Animated.spring(ballSize, {
      toValue: newSize, // Target the new size
      friction: 5, // Lower friction makes the spring bouncier
      tension: 120, // Higher tension makes the animation faster and more pronounced
      useNativeDriver: false, // Remember, set to true only if animating opacity or transform
    }).start();
  };

  return (
    <View>
      <FadeInView>
        <Text>Animation Page</Text>
      </FadeInView>
      <View style={{ marginTop: 24 }}>
        <Btn text="Increase Size" onPress={increaseSize} />
      </View>
      <View style={styles.pongCtr}>
        {/* <View style={[styles.ball, { height: ballSize, width: ballSize }]} /> */}
        <Animated.View
          style={[
            styles.ball,
            {
              height: ballSize, // Use Animated value for height and width
              width: ballSize,
              borderRadius: ballSize.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 50], // Ensure borderRadius updates to maintain the circle shape as size increases
              }),
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pongCtr: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(180, 0, 0, 0.5)",
    marginVertical: 24,
  },
  ball: {
    // borderRadius: "50%",
    backgroundColor: "violet",
  },
});
