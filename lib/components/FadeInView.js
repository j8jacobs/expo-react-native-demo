import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function FadeInView({ children, style = {}, ...rest }) {
  const fadeAdmin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAdmin]);

  return (
    <Animated.View style={{ ...style, opacity: fadeAdmin }}>
      {children}
    </Animated.View>
  );
}
