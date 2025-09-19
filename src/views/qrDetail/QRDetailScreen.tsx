import AppHeader from "components/Header";
import { View } from "react-native";
import UserCard, { UserCardSkeleton } from "./components/UserCard";
import { ScrollView } from "react-native-gesture-handler";
import { getGuestData } from "@utils";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { IRegisteredGuest } from "models/GuestController";
import { createStyles } from "./QRDetailScreen.style";
import { localStrings } from "shared/localization";

interface QRDetailScreenProps {
  guestDetail: IRegisteredGuest | null;
  isLoading: boolean;
}

const QrDetailScreen: React.FC<QRDetailScreenProps> = ({
  guestDetail,
  isLoading,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const userDetail = useMemo(() => getGuestData(guestDetail), [guestDetail]);

  return (
    <View style={styles.container}>
      <AppHeader headerTitle={localStrings.ticketDetails} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isLoading ? (
          <UserCardSkeleton />
        ) : (
          <UserCard userDetail={userDetail} />
        )}
      </ScrollView>
    </View>
  );
};
export default QrDetailScreen;
