import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import ProfileSection from "./ProfileSection";
import UserInfoSection from "./UserInfoSection";
import DetailsSection from "./DetailsSection";
import CustomButton from "components/button";
import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { UserDetail } from "models/GuestController";

interface UserCardProps {
  userDetail: UserDetail;
}

const UserCard: React.FC<UserCardProps> = ({ userDetail }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const handleConfirm = () => {
    navigate(SCREENS.HOME);
  };
  return (
    <View style={styles.container}>
      <ProfileSection
        profileImageUrl={userDetail?.profileImageUrl}
        displayName={userDetail?.displayName}
      />

      <UserInfoSection
        displayName={userDetail?.displayName}
        jobtitle={userDetail?.jobtitle}
        registered={userDetail?.registered}
        attended={userDetail?.attended}
      />

      <DetailsSection
        department={userDetail?.department}
        locationName={userDetail?.locationName}
        email={userDetail?.email}
        mobilePhone={userDetail?.mobilePhone}
        numberOfGuest={userDetail?.numberOfGuest}
        checkedInGuest={userDetail?.checkedInGuest}
      />
      <CustomButton onPress={handleConfirm} text={"Confirm"} />
    </View>
  );
};

export default UserCard;
