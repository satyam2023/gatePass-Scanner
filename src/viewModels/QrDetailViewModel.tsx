import { RouteProp } from "@react-navigation/native";
import { getRegisteredGuestDetail } from "controllers/guestController";
import { IRegisteredGuest } from "models/GuestController";
import { useEffect, useState } from "react";
import { MainStackParamList } from "route/IRoute";
import QrDetailScreen from "views/qrDetail/QRDetailScreen";

type QrDetailNavigationProps = {
  route: RouteProp<MainStackParamList, "QRDetails">;
};

const QrDetailViewModel: React.FC<QrDetailNavigationProps> = ({ route }) => {
  const [guestDetail, setGuestDetail] = useState<IRegisteredGuest | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getGuestsDetail = async () => {
    try {
      setLoading(true);
      const email = route.params?.qrData;
      const response = await getRegisteredGuestDetail(email);
      setGuestDetail(response.data?.data || null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuestsDetail();
  }, [route?.params]);

  return <QrDetailScreen guestDetail={guestDetail} isLoading={isLoading} />;
};

export default QrDetailViewModel;
