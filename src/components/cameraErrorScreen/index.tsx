import { palette } from "@theme/themes";
import AppHeader from "components/Header";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { localStrings } from "shared/localization";

interface ICameraErrorprops {
  message: string;
}

const CameraErrorScreen = ({ message }: ICameraErrorprops) => {
  return (
    <React.Fragment>
      <AppHeader headerTitle={localStrings.qrScanner} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={palette.primary} />
        <TextWrapper style={{ fontSize: 20 }}>{message}</TextWrapper>
      </View>
    </React.Fragment>
  );
};

export default CameraErrorScreen;
