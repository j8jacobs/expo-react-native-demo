import { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import FadeInView from "../../lib/components/FadeInView";
import Btn from "../../lib/components/Btn";

const DEFAULT_BALL_SIZE = 60;
const BALL_CTR_HEIGHT = 200;

export default function Animations() {
  const ballSize = useRef(new Animated.Value(DEFAULT_BALL_SIZE)).current;
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: position.x, dy: position.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: releaseBackToStart,
  });

  const increaseSize = () => {
    if (ballSize._value >= BALL_CTR_HEIGHT) {
      return;
    }

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

  const releaseBackToStart = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
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
        <Animated.View
          style={[
            styles.ball,
            {
              height: ballSize, // Use Animated value for height and width
              width: ballSize,
              transform: position.getTranslateTransform(),
            },
          ]}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pongCtr: {
    height: BALL_CTR_HEIGHT,
    width: "100%",
    backgroundColor: "rgba(180, 0, 0, 0.5)",
    marginVertical: 24,
  },
  ball: {
    borderRadius: "100%",
    backgroundColor: "violet",
  },
});
