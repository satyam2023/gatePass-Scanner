import { useTheme } from "@react-navigation/native";
import { palette } from "@theme/themes";
import AppText from "components/RNText";
import React from "react";
import { View, Pressable, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export interface ButtonProps {
  headerTitle: string;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  style?: ViewStyle;
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
        <AppText fontSize={20} bold color={palette.white}>
          {props.headerTitle}
        </AppText>

        {props.rightIcon && (
          <Pressable onPress={props.onRightIconPress}>
            {props.rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
