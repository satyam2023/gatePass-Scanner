import { SCREENS } from "@shared-constants";

export type MainStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.QRDetails]: { qrData: string };
};
