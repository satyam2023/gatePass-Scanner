import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "libs";

export const createSkeletonStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 25,
      marginHorizontal: 20,
      marginVertical: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 10,
      overflow: "hidden",
      padding: 16,
    },
    profileSection: {
      alignItems: "center",
      zIndex: 1,
      flexShrink: 0,
    },
    profileImageContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: colors.white,
      padding: 3,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    userInfoSection: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 12,
      flexShrink: 0,
    },
    statusContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
      marginBottom: 5,
      flexWrap: "wrap",
    },
    detailsSection: {
      marginTop: 8,
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
      alignItems: "flex-start",
    },
    detailItem: {
      flex: 1,
      marginHorizontal: 4,
      backgroundColor: colors.ghostWhite,
      padding: 10,
      borderRadius: 10,
      borderLeftWidth: 2,
      borderLeftColor: colors.primary,
    },
    buttonContainer: {
      marginTop: 16,
      paddingHorizontal: 4,
    },
    placeholderBase: {
      backgroundColor: colors.mutedGray,
      overflow: "hidden",
    },
    shimmerGradient: {
      position: "absolute",
      top: 0,
      left: -ScreenWidth,
      right: 0,
      bottom: 0,
      width: ScreenWidth * 2,
      flexDirection: "row",
    },
    shimmerHighlight1: {
      flex: 0.3,
      backgroundColor: "transparent",
    },
    shimmerHighlight2: {
      flex: 0.4,
      backgroundColor: colors.white,
      opacity: 0.6,
    },
    shimmerHighlight3: {
      flex: 0.3,
      backgroundColor: "transparent",
    },
  });
};
