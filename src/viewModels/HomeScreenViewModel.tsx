import { navigate } from "@navigation";
import { SCREENS } from "@shared-constants";
import { logger } from "@utils";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import {
  CameraRuntimeError,
  CodeScanner,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import HomeScreen from "views/home/HomeScreen";

const HomeViewModel: React.FC = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [cameraError, setCameraError] = useState<string>("");

  const handleCameraPermission = async () => {
    if (!hasPermission) {
      try {
        const permission = await requestPermission();
        if (!permission) {
          await Linking.openSettings();
        }
      } catch (error) {
        logger("Error requesting camera permission");
      }
    }
  };
  const device = useCameraDevice("back");

  const codeScanner: CodeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      if (codes?.[0]?.value) {
        navigate(SCREENS.QRDetails, { qrData: codes?.[0].value });
      }
    },
  });

  const handleFlashlightToggle = () => {
    setIsFlashlightOn((prev) => !prev);
  };

  const handleCameraError = (err: CameraRuntimeError) => {
    console.log("cameraError", err);
    setCameraError(err?.message || "Camera error occurred");
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  return (
    <HomeScreen
      {...{
        device,
        codeScanner,
        isFlashlightOn,
        cameraError,
        onFlashlightToggle: handleFlashlightToggle,
        onCameraError: handleCameraError,
      }}
    />
  );
};

export default HomeViewModel;
