import { navigate } from "@navigation";
import { useIsFocused } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import React, { useState } from "react";
import {
  CameraRuntimeError,
  CodeScanner,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";
import HomeScreen from "views/home/HomeScreen";

const HomeViewModel: React.FC = () => {
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [cameraError, setCameraError] = useState<string>("");

  const isFocused = useIsFocused();


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


  return (
    <HomeScreen
      {...{
        device,
        codeScanner,
        isFlashlightOn,
        cameraError,
        onFlashlightToggle: handleFlashlightToggle,
        onCameraError: handleCameraError,
        isFocused,
      }}
    />
  );
};

export default HomeViewModel;
