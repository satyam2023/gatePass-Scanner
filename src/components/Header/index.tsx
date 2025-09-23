import { goBack } from "@navigation";
import { useTheme } from "@react-navigation/native";
import { palette } from "@theme/themes";
import Glyphs from "assets/Glyphs";
import PressableImage from "components/pressableImage";
import AppText from "components/RNText";
import React from "react";
import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ButtonProps {
  headerTitle: string;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  isBackButtonVisible?: boolean;
}

const AppHeader = (props: ButtonProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: top,
          backgroundColor: colors.primary,
          width: "100%",
        },
        props?.style,
      ]}
    >
      <View
        style={{
          height: 64,
          backgroundColor: colors.primary,
          width: "100%",
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props?.isBackButtonVisible && (
            <PressableImage
              src={Glyphs.BackArrow}
              onPress={goBack}
              containerStyle={{ padding: 8 }}
              imageStyle={{
                width: 20,
                height: 20,
                tintColor: palette.white,
                marginRight: 5,
              }}
            />
          )}
          <AppText fontSize={20} bold color={palette.white}>
            {props.headerTitle}
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;
