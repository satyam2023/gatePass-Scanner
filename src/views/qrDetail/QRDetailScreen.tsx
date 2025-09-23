import AppHeader from "components/Header";
import { View } from "react-native";
import UserCard, { UserCardSkeleton } from "./components/UserCard";
import { ScrollView } from "react-native-gesture-handler";
import { getGuestData } from "@utils";
import { RefObject, useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { IRegisteredGuest } from "models/GuestController";
import { createStyles } from "./QRDetailScreen.style";
import { localStrings } from "shared/localization";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICheckInDetail } from "models/QrDetail";

interface QRDetailScreenProps {
  guestDetail: IRegisteredGuest | null;
  isLoading: boolean;
  checkInData: RefObject<ICheckInDetail>;
  guestCheckInApi: () => Promise<void>;
}

const QrDetailScreen: React.FC<QRDetailScreenProps> = ({
  guestDetail,
  isLoading,
  checkInData,
  guestCheckInApi,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const userDetail = useMemo(() => getGuestData(guestDetail), [guestDetail]);
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <AppHeader headerTitle={localStrings.ticketDetails} isBackButtonVisible/>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          { paddingBottom: bottom },
        ]}
      >
        {isLoading ? (
          <UserCardSkeleton />
        ) : (
          <UserCard
            userDetail={userDetail}
            checkInData={checkInData}
            guestCheckInApi={guestCheckInApi}
          />
        )}
      </ScrollView>
    </View>
  );
};
export default QrDetailScreen;
