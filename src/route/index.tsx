import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { isReadyRef, navigationRef } from "@navigation";
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme } from "@theme/themes";
import { useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import HomeViewModel from "../viewModels/HomeScreenViewModel";
import { MainStackParamList } from "./IRoute";
import QrDetailViewModel from "viewModels/QrDetailViewModel";
import { useAppCameraPermission } from "core/useAppPermission";
import CameraPermissionScreen from "components/PermissionModal";
import { localStrings } from "shared/localization";
import CameraErrorScreen from "components/cameraErrorScreen";
const Stack = createStackNavigator<MainStackParamList>();

const Navigation = () => {
  const { hasPermission, loading } = useAppCameraPermission();
  const isDarkMode = useSelector(
    (state: RootState) => state.themeReducer.isDarkMode,
  );
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  if (loading && !hasPermission) {
    return <CameraErrorScreen message={localStrings.checkingPermission} />;
  }

  if (!hasPermission) {
    return <CameraPermissionScreen />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeViewModel} />
        <Stack.Screen name={SCREENS.QRDetails} component={QrDetailViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
