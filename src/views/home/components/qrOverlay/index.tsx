import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import Glyphs from "assets/Glyphs";
import createStyles from "./Style";
import { localStrings } from "shared/localization";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface QRScannerOverlayProps {
  isFlashlightOn?: boolean;
  onFlashlightToggle?: () => void;
}

const QRScannerOverlay: React.FC<QRScannerOverlayProps> = ({
  isFlashlightOn = false,
  onFlashlightToggle,
}) => {
  const theme = useTheme();
  const {bottom}=useSafeAreaInsets();
  const styles = useMemo(() => createStyles(theme,bottom), [theme,bottom]);

  return (
    <View style={styles.overlayContainer}>
      <View style={styles.overlayHeader}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.overlayTitle}>{localStrings.anandotsav}</Text>
          <Text style={styles.overlaySubtitle}>{localStrings.qrScanner}</Text>
        </View>
      </View>

      <View style={styles.scanningArea}>
        <View style={styles.scanArea}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>

      <View style={styles.bottomControls}>
        <TouchableOpacity
          style={[styles.controlButton, isFlashlightOn && styles.activeControl]}
          onPress={onFlashlightToggle}
        >
          <Image
            source={isFlashlightOn ? Glyphs.FlashOn : Glyphs.FlashOff}
            style={[styles.controlIcon, isFlashlightOn && styles.activeIcon]}
          />
          <Text
            style={[styles.controlText, isFlashlightOn && styles.activeText]}
          >
            Torch
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.brandingContainer}>
        <Text style={styles.brandingText}>
          {localStrings.successiveDigital}
        </Text>
      </View>
    </View>
  );
};

export default QRScannerOverlay;
