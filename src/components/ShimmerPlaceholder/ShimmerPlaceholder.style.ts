import { ViewStyle, StyleSheet } from "react-native";

interface ShimmerStylesInterface {
  placeholderBase: ViewStyle;
  shimmerGradient: ViewStyle;
  shimmerHighlight1: ViewStyle;
  shimmerHighlight2: ViewStyle;
  shimmerHighlight3: ViewStyle;
}

export const shimmerStyles: ShimmerStylesInterface = StyleSheet.create({
  placeholderBase: {
    backgroundColor: "#E1E9EE",
  },

  shimmerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },

  shimmerHighlight1: {
    position: "absolute",
    top: 0,
    left: "20%",
    width: "20%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  shimmerHighlight2: {
    position: "absolute",
    top: 0,
    left: "40%",
    width: "20%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  shimmerHighlight3: {
    position: "absolute",
    top: 0,
    left: "60%",
    width: "20%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
