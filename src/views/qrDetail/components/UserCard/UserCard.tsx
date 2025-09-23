import React, { RefObject, useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import ProfileSection from "./ProfileSection";
import UserInfoSection from "./UserInfoSection";
import DetailsSection from "./DetailsSection";
import CustomButton from "components/button";
import { UserDetail } from "models/GuestController";
import { ICheckInDetail } from "models/QrDetail";
import { localStrings } from "shared/localization";

interface UserCardProps {
  userDetail: UserDetail;
  checkInData: RefObject<ICheckInDetail>;
  guestCheckInApi: () => Promise<void>;
}

const UserCard: React.FC<UserCardProps> = ({
  userDetail,
  checkInData,
  guestCheckInApi,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <ProfileSection
        profileImageUrl={userDetail?.profileImageUrl}
        displayName={userDetail?.displayName}
      />

      <UserInfoSection
        displayName={userDetail?.displayName}
        jobtitle={userDetail?.employeeNumber}
        registered={userDetail?.registered}
        attended={userDetail?.attended}
      />

      <DetailsSection
        mobilePhone={userDetail?.mobilePhone}
        numberOfGuest={userDetail?.numberOfGuest}
        checkedInGuest={userDetail?.checkedInGuest}
        checkedInAdults={userDetail?.checkedInAdults}
        checkedInKids={userDetail?.checkedInKids}
        adults={userDetail?.adults}
        kids={userDetail?.kids}
        checkInData={checkInData}
      />
      <CustomButton onPress={guestCheckInApi} text={localStrings.submit} />
    </View>
  );
};

export default UserCard;
