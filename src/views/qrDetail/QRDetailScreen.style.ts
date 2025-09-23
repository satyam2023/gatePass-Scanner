import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

export const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    scrollContainer: {
      justifyContent: "center",
      flex: 1
    },
  });
};
