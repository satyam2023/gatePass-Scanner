import fonts from "@fonts";
import { palette } from "@theme/themes";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IStyles {
  modalContainer: ViewStyle;
  loaderContainer: ViewStyle;
  img: ImageStyle;
  loadingText: TextStyle;
}

export const createLoaderStyle = () => {
  const colors = palette; // use color in loader from palette because loader is in App.tsx
  return StyleSheet.create<IStyles>({
    modalContainer: {
      flex: 1,
      zIndex: 10000,
      backgroundColor: palette.transparentBlack,
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
    },
    loaderContainer: {
      backgroundColor: colors.white,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      borderRadius: 8,
    },
    img: {
      height: 80,
      width: 80,
      resizeMode: "contain",
    },
    loadingText: {
      fontFamily: fonts.montserrat.medium,
      color: colors.primary,
      fontSize: 14,
      textAlign: "center",
      marginTop: 6,
    },
  });
};
