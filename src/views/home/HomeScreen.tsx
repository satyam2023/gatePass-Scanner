import { useIsFocused, useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  Camera,
  CameraDevice,
  CameraRuntimeError,
  CodeScanner,
} from "react-native-vision-camera";
import { localStrings } from "shared/localization";
import { style } from "./HomeScreen.style";
import QRScannerOverlay from "./components/qrOverlay";

interface HomeScreenProps {
  device?: CameraDevice;
  codeScanner: CodeScanner;
  isFlashlightOn: boolean;
  cameraError: string;
  onFlashlightToggle?: () => void;
  onCameraError?: (error: CameraRuntimeError) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  device,
  codeScanner,
  isFlashlightOn = false,
  cameraError = null,
  onFlashlightToggle,
  onCameraError,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => style(theme), [theme]);
  const isFocused = useIsFocused();

  const renderContent = () => {
    if (cameraError) {
      return (
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>{cameraError}</Text>
        </View>
      );
    }

    if (device && codeScanner && isFocused) {
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
    }

    return (
      <React.Fragment>
        <ActivityIndicator color={theme?.colors.primary} size={"large"} />
        <Text style={styles.permissionText}>
          {localStrings.initializeCamera}
        </Text>
      </React.Fragment>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default HomeScreen;
