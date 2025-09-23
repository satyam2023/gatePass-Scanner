import { navigate } from "@navigation";
import { RouteProp } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import {
  getRegisteredGuestDetail,
  guestCheckIn,
} from "controllers/guestController";
import { IRegisteredGuest } from "models/GuestController";
import { ICheckInDetail } from "models/QrDetail";
import { useEffect, useRef, useState } from "react";
import { setLoader } from "redux/actions/LoaderAction";
import { store } from "redux/store/Store";
import { MainStackParamList } from "route/IRoute";
import QrDetailScreen from "views/qrDetail/QRDetailScreen";

type QrDetailNavigationProps = {
  route: RouteProp<MainStackParamList, "QRDetails">;
};

const QrDetailViewModel: React.FC<QrDetailNavigationProps> = ({ route }) => {
  const [guestDetail, setGuestDetail] = useState<IRegisteredGuest | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const checkInData = useRef<ICheckInDetail>({
    checkedInAdults: 0,
    checkedInKids: 0,
  });

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

  const guestCheckInApi = async () => {
    const checkInDetail = checkInData?.current;
    if (
      checkInDetail?.checkedInAdults === 0 &&
      checkInDetail?.checkedInKids === 0
    ) {
      navigate(SCREENS.HOME);
      return;
    }
    try {
      store?.dispatch(setLoader(true));
      const res = await guestCheckIn(route.params?.qrData, {
        checkedInAdults: checkInDetail?.checkedInAdults,
        checkedInKids: checkInDetail?.checkedInKids,
      });
      if (res?.isSuccess) {
        navigate(SCREENS.HOME);
      }
    } finally {
      store?.dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    getGuestsDetail();
  }, [route?.params]);

  return (
    <QrDetailScreen
      guestDetail={guestDetail}
      isLoading={isLoading}
      checkInData={checkInData}
      guestCheckInApi={guestCheckInApi}
    />
  );
};

export default QrDetailViewModel;
