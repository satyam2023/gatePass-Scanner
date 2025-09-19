import fonts from "@fonts";
import { IColors } from "@theme/themes";
import { normalizeText } from "libs";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface ICounterButtonStyle {
  container: ViewStyle;
  countInput: TextStyle;
  incrementDecrementContainer: ViewStyle;
  img: ImageStyle;
}

export const styles = (colors: IColors, isDisable?: boolean) => {
  return StyleSheet.create<ICounterButtonStyle>({
    container: {
      flexDirection: "row",
      height: 32,
      alignItems: "center",
      alignSelf: "center",
    },
    countInput: {
      borderColor: colors.black,
      fontFamily: fonts.montserrat.regular,
      fontSize: normalizeText(14),
      color: colors.black,
      paddingVertical: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      paddingHorizontal: 14,
    },
    incrementDecrementContainer: {
      backgroundColor: isDisable ? colors.disableButtonColor : colors.red,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.red,
      padding: 10,
      borderRadius: 40,
    },
    img: {
      width: 20,
      height: 20,
      resizeMode: "contain",
      tintColor: colors.white,
    },
  });
};
