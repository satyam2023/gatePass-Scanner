import fonts from "@fonts";
import { ScreenHeight, ScreenWidth } from "libs";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IUnderMaintenanceStyle {
  container: ViewStyle;
  image: ImageStyle;
  message: TextStyle;
}

export const styles = StyleSheet.create<IUnderMaintenanceStyle>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ScreenWidth * 0.12,
  },
  image: {
    height: ScreenHeight * 0.35,
    width: ScreenWidth * 0.76,
    resizeMode: "contain",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 1,
    fontFamily: fonts.montserrat.semiBold,
  },
});
