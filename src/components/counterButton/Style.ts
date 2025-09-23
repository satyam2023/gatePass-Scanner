import fonts from "@fonts";
import { IColors } from "@theme/themes";
import { normalizeText } from "libs";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface ICounterButtonStyle {
  container: ViewStyle;
  countInput: TextStyle;
  incrementDecrementContainer: ViewStyle;
  img: ImageStyle;
  counterText: TextStyle;
  counterContainer: ViewStyle;
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
      fontWeight: "800",
    },
    incrementDecrementContainer: {
      backgroundColor: isDisable ? colors.disableButtonColor : colors.primary,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.red,
      padding: 10,
      borderRadius: 40,
      elevation: 10,
    },
    img: {
      width: 16,
      height: 16,
      resizeMode: "contain",
      tintColor: colors.white,
    },
    counterText: {
      fontSize: 16,
      color: colors.primary,
      textAlign: "center",
      marginBottom: 10,
      fontWeight: "700",
    },
    counterContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 16,
    },
  });
};
