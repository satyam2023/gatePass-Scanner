import { ExtendedTheme } from "@react-navigation/native";
import { ScreenHeight, ScreenWidth } from "libs";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

interface HomeScreenStyles {
  container: StyleProp<ViewStyle>;
  cameraContainer: StyleProp<ViewStyle>;
  permissionContainer: StyleProp<ViewStyle>;
  permissionText: StyleProp<TextStyle>;
  flashIcon: StyleProp<ImageStyle>;
}

export const style = (theme: ExtendedTheme): HomeScreenStyles => {
  return StyleSheet.create({
    container: {
      height: ScreenHeight,
      width: ScreenWidth,
    },
    cameraContainer: {
      position: "relative",
      flex: 1,
    },
    permissionContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    permissionText: {
      fontSize: 18,
      color: theme.colors.text,
      textAlign: "center",
    },
    flashIcon: {
      width: 24,
      height: 24,
      resizeMode: "contain",
      tintColor: theme.colors.white,
    },
  });
};
