import fonts from "@fonts";
import { IColors } from "@theme/themes";
import { StyleSheet } from "react-native";

export const createButtonStyle = (colors: IColors) => {
  return StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      width: "100%",
      height: 48,
      flexDirection: "row",
    },
    textStyle: {
      fontSize: 16,
      color: colors.white,
      fontFamily: fonts.montserrat.extraBold,
      textAlign: "center",
      flex: 1,
    },
    leftIconStyle: {
      height: 22,
      width: 22,
      marginRight: 16,
      resizeMode: "contain",
    },
  });
};
