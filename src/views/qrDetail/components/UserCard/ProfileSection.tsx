import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import TextWrapper from "components/TextWrapper";
import APIConstants from "core/ApiConstants";

interface ProfileSectionProps {
  profileImageUrl?: string;
  displayName: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileImageUrl,
  displayName,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const getInitials = useMemo(() => {
    if (!displayName || displayName === "No Guest Data") {
      return "?";
    }
    return (
      displayName
        ?.split(" ")
        ?.map((word) => word.charAt(0))
        ?.join("")
        ?.toUpperCase()
        ?.substring(0, 2) || "?"
    );
  }, [displayName]);

  return (
    <View style={styles.profileSection}>
      <View style={styles.profileImageContainer}>
        {profileImageUrl ? (
          <Image
            source={{ uri: `${APIConstants.ImgEndPoint}${profileImageUrl}` }}
            style={styles.profileImage}
          />
        ) : (
          <View style={styles.initialsContainer}>
            <TextWrapper style={styles.initialsText}>{getInitials}</TextWrapper>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileSection;
