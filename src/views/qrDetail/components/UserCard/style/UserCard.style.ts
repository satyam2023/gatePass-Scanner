import { StyleSheet } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { IColors } from "../../../../../shared/theme/themes";

export const createStyles = (theme: ExtendedTheme & { colors: IColors }) => {
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
    },
    profileImage: {
      width: 74,
      height: 74,
      borderRadius: 37,
    },
    initialsContainer: {
      width: 74,
      height: 74,
      borderRadius: 37,
      backgroundColor: colors.softCloudBlue,
      justifyContent: "center",
      alignItems: "center",
    },
    initialsText: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.primaryBlue,
    },
    userInfoSection: {
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 8,
      paddingBottom: 12,
      flexShrink: 0,
    },
    userName: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.darkGray,
      marginBottom: 3,
      textAlign: "center",
    },
    userTitle: {
      fontSize: 13,
      color: colors.lightTextColor,
      marginBottom: 8,
      textAlign: "center",
    },
    statusContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 10,
      marginBottom: 5,
      flexWrap: "wrap",
    },
    statusBadge: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 15,
      minWidth: 70,
      alignItems: "center",
    },
    registeredBadge: {
      backgroundColor: colors.green + "20",
    },
    notRegisteredBadge: {
      backgroundColor: colors.red + "20",
    },
    attendedBadge: {
      backgroundColor: colors.green + "20",
    },
    notAttendedBadge: {
      backgroundColor: colors.amber + "20",
    },
    statusText: {
      fontSize: 10,
      fontWeight: "700",
      color: colors.darkGray,
      textAlign: "center",
    },
    detailsSection: {},
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
    detailLabel: {
      fontSize: 10,
      fontWeight: "700",
      color: colors.lightTextColor,
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: 0.3,
    },
    detailValue: {
      fontSize: 12,
      fontWeight: "600",
      color: colors.darkGray,
      lineHeight: 18,
    },
  });
};
