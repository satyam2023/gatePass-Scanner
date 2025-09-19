import fonts from "@fonts";
import { IColors } from "@theme/themes";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IStyle {
  iconImg: ImageStyle;
  textStyle: TextStyle;
  container: ViewStyle;
}

export const createPressableImageStyle = (colors: IColors) => {
  return StyleSheet.create<IStyle>({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    iconImg: {
      height: 24,
      width: 24,
      resizeMode: "contain",
    },
    textStyle: {
      marginLeft: 12,
      fontSize: 14,
      fontFamily: fonts.montserrat.medium,
      color: colors.red,
    },
  });
};
