import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const DEFAULT_DURATION = 1_200;

export default function FadeInView({
  children,
  duration = DEFAULT_DURATION,
  style = {},
  ...rest
}) {
  const fadeAdmin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAdmin, {
      duration,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [fadeAdmin]);

  return (
    <Animated.View style={{ ...style, opacity: fadeAdmin }} {...rest}>
      {children}
    </Animated.View>
  );
}
