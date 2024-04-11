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

const DEFAULT_BALL_SIZE = 60; // 20
const BALL_CTR_HEIGHT = 200;

export default function Animations() {
  const ballSize = useRef(new Animated.Value(DEFAULT_BALL_SIZE)).current; // Initial ball size
  const position = useRef(new Animated.ValueXY()).current;

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const containerWidth = screenWidth;
  const containerHeight = BALL_CTR_HEIGHT;

  // const panResponder = useRef(
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: position.x, dy: position.y }],
      { useNativeDriver: false }
    ),
    onPanResponderGrant: (e, gestureState) => {
      position.setOffset(position.__getValue());
      position.setValue({ x: 0, y: 0 });
    },
    onPanResponderRelease: (e, gestureState) => {
      // releaseBackToStart(e, gestureState);
      // releaseBackWithinBounds(e, gestureState);
    },
  });
  // ).current;

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

  const releaseBackToStart = (e, gestureState) => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };
  const releaseBackWithinBounds = (e, gestureState) => {
    // console.log(
    //   `position: x = ${position.x._value} | y = ${position.y._value}`
    // );
    // // Current position based on the drag
    // let finalX = position.x._value + gestureState.dx;
    // let finalY = position.y._value + gestureState.dy;
    // // Consider the ball size for boundaries
    // const halfBallSize = ballSize._value / 2;
    // // Ensure the ball stays within the container's bounds
    // finalX = Math.max(0, Math.min(finalX, containerWidth - halfBallSize * 2));
    // finalY = Math.max(0, Math.min(finalY, containerHeight - halfBallSize * 2));
    // // Smoothly move the ball to the constrained position if needed
    // Animated.spring(position, {
    //   toValue: { x: finalX, y: finalY },
    //   useNativeDriver: false,
    // }).start();
    // // After the animation, update the position state to reflect the ball's new location
    // // This step ensures that the next drag starts from where the last one left off
    // // position.setOffset({
    // //   x: finalX,
    // //   y: finalY,
    // // });
    // // // Reset the value of the position to 0 to ensure the offset is from the current position
    // // position.setValue({ x: 0, y: 0 });
    // console.log(finalX, finalY);
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
    borderRadius: "100%", // this does have a limit
    backgroundColor: "violet",
  },
});
