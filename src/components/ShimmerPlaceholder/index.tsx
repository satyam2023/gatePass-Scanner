import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  ViewStyle,
  DimensionValue,
  Dimensions,
} from "react-native";
import { shimmerStyles } from "./ShimmerPlaceholder.style";

const { width: screenWidth } = Dimensions.get("window");

interface ShimmerPlaceholderProps {
  width?: DimensionValue;
  height?: number;
  borderRadius?: number;
  style?: ViewStyle;
}

const ShimmerPlaceholder: React.FC<ShimmerPlaceholderProps> = ({
  width = "100%",
  height = 16,
  borderRadius = 8,
  style,
}) => {
  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startShimmer = () => {
      shimmerAnimation.setValue(0);
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1000, // Faster animation - reduced from 1500ms to 1000ms
        useNativeDriver: true,
      }).start(() => {
        startShimmer();
      });
    };

    startShimmer();
  }, [shimmerAnimation]);

  const shimmerTranslate = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <View
      style={[
        {
          width: width as DimensionValue,
          height,
          borderRadius,
          overflow: "hidden",
        },
        shimmerStyles.placeholderBase,
        style,
      ]}
    >
      <Animated.View
        style={[
          shimmerStyles.shimmerGradient,
          {
            transform: [{ translateX: shimmerTranslate }],
          },
        ]}
      >
        <View style={shimmerStyles.shimmerHighlight1} />
        <View style={shimmerStyles.shimmerHighlight2} />
        <View style={shimmerStyles.shimmerHighlight3} />
      </Animated.View>
    </View>
  );
};

export default ShimmerPlaceholder;
