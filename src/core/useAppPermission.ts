import { useEffect, useState, useCallback } from "react";
import { Linking } from "react-native";
import { useCameraPermission } from "react-native-vision-camera";

type CameraPermissionState = {
  hasPermission: boolean;
  openSettings: () => Promise<void>;
  loading: boolean;
};

export function useAppCameraPermission(): CameraPermissionState {
  const [loading, setLoading] = useState(true);
  const { hasPermission, requestPermission } = useCameraPermission();

  const openSettings = useCallback(async () => {
    try {
      await Linking.openSettings();
    } catch (e) {
      console.warn("Failed to open settings:", e);
    }
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (!hasPermission) {
        await requestPermission();
      }
      setLoading(false);
    })();
  }, [hasPermission, requestPermission]);

  return {
    hasPermission,
    openSettings,
    loading,
  };
}
