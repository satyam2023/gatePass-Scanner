import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth, ScreenHeight } from "libs";

const createStyles = (theme?: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create({
    overlayContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.55)",
    },
    overlayHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 50,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },

    headerTextContainer: {
      alignItems: "center",
    },

    overlayTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 4,
    },

    overlaySubtitle: {
      fontSize: 14,
      color: "#CCCCCC",
    },
    scanningArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 60,
    },
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    overlayTop: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: (ScreenHeight - 250) / 2,
    },

    overlayBottom: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: (ScreenHeight - 250) / 2,
    },

    overlayLeft: {
      position: "absolute",
      top: (ScreenHeight - 250) / 2,
      left: 0,
      width: (ScreenWidth - 250) / 2,
      height: 250,
    },

    overlayRight: {
      position: "absolute",
      top: (ScreenHeight - 250) / 2,
      right: 0,
      width: (ScreenWidth - 250) / 2,
      height: 250,
    },

    scanArea: {
      width: 280,
      height: 280,
      position: "relative",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 20,
    },

    corner: {
      position: "absolute",
      width: 40,
      height: 40,
      borderWidth: 4,
      borderColor: colors.primary,
    },

    topLeft: {
      top: -2,
      left: -2,
      borderBottomWidth: 0,
      borderRightWidth: 0,
      borderTopLeftRadius: 20,
    },

    topRight: {
      top: -2,
      right: -2,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderTopRightRadius: 20,
    },

    bottomLeft: {
      bottom: -2,
      left: -2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomLeftRadius: 20,
    },

    bottomRight: {
      bottom: -2,
      right: -2,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderBottomRightRadius: 20,
    },
    bottomControls: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 40,
      paddingHorizontal: 80,
    },

    controlButton: {
      alignItems: "center",
      padding: 20,
      borderRadius: 50,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      minWidth: 80,
    },

    activeControl: {
      backgroundColor: `${colors.primary}33`,
    },

    controlIcon: {
      width: 28,
      height: 28,
      tintColor: colors.white,
      marginBottom: 8,
      fontSize: 24,
      color: colors.white,
      textAlign: "center",
    },

    activeIcon: {
      tintColor: colors.primary,
    },

    controlText: {
      fontSize: 14,
      color: colors.white,
      fontWeight: "600",
    },

    activeText: {
      color: colors.primary,
    },
    brandingContainer: {
      alignItems: "center",
      paddingBottom: 40,
    },

    brandingText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.white,
      letterSpacing: 2,
    },

    instructionText: {
      position: "absolute",
      bottom: -60,
      alignSelf: "center",
      color: colors.white,
      fontSize: 16,
      fontWeight: "500",
      textAlign: "center",
      backgroundColor: "transparent",
    },
  });
};

export default createStyles;
