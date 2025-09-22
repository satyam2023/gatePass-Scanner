import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  CameraDevice,
  CameraRuntimeError,
  CodeScanner,
} from "react-native-vision-camera";
import { localStrings } from "shared/localization";
import { style } from "./HomeScreen.style";
import QRScannerOverlay from "./components/qrOverlay";
import CameraErrorScreen from "components/cameraErrorScreen";

interface HomeScreenProps {
  device?: CameraDevice;
  codeScanner: CodeScanner;
  isFlashlightOn: boolean;
  cameraError: string;
  onFlashlightToggle?: () => void;
  onCameraError?: (error: CameraRuntimeError) => void;
  isFocused: boolean;
  appForeGround: boolean;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  device,
  codeScanner,
  isFlashlightOn = false,
  cameraError = null,
  onFlashlightToggle,
  onCameraError,
  isFocused,
  appForeGround,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => style(theme), [theme]);
  const shouldShowFallback =
    !device || !isFocused || !codeScanner || cameraError || !appForeGround;
  const renderContent = () => {
    if (shouldShowFallback) {
      return (
        <CameraErrorScreen
          message={cameraError || localStrings.initializeCamera}
        />
      );
    }

    return (
      <View style={StyleSheet.absoluteFill}>
        <Camera
          device={device}
          codeScanner={codeScanner}
          style={StyleSheet.absoluteFill}
          onError={onCameraError}
          photo={false}
          torch={isFlashlightOn ? "on" : "off"}
          isActive={true}
        />
        <QRScannerOverlay
          isFlashlightOn={isFlashlightOn}
          onFlashlightToggle={onFlashlightToggle}
        />
      </View>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default HomeScreen;
