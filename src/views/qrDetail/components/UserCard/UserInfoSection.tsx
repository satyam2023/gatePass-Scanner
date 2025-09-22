import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import { StatusBadgeData } from "models/GuestController";

interface UserInfoSectionProps {
  displayName: string;
  jobtitle: string;
  registered: boolean;
  attended: boolean;
}

const UserInfoSection: React.FC<UserInfoSectionProps> = ({
  displayName,
  jobtitle,
  registered,
  attended,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const statusBadges: StatusBadgeData[] = useMemo(
    () => [
      {
        text: registered ? "Registered" : "Not Registered",
        isActive: registered,
        activeStyle: "registeredBadge",
        inactiveStyle: "notRegisteredBadge",
      },
      {
        text: attended ? "Attended" : "Not Attended",
        isActive: attended,
        activeStyle: "attendedBadge",
        inactiveStyle: "notAttendedBadge",
      },
    ],
    [registered, attended],
  );

  const getBadgeStyle = (badge: StatusBadgeData) => {
    if (badge.isActive) {
      return badge.activeStyle === "registeredBadge"
        ? styles.registeredBadge
        : styles.attendedBadge;
    }
    return badge.inactiveStyle === "notRegisteredBadge"
      ? styles.notRegisteredBadge
      : styles.notAttendedBadge;
  };

  return (
    <View style={styles.userInfoSection}>
      <Text style={styles.userName}>{displayName}</Text>
      <Text style={styles.userTitle}>{jobtitle}</Text>

      <View style={styles.statusContainer}>
        {statusBadges.map((badge, index) => (
          <View key={index} style={[styles.statusBadge, getBadgeStyle(badge)]}>
            <Text style={styles.statusText}>{badge.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default UserInfoSection;
