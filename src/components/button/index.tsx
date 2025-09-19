import React from "react";
import {
  ImageComponent,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  TextStyle,
  ViewStyle,
} from "react-native";
import { debounceHOC } from "hocs/debounceHOC";
import fonts from "@fonts";

import { useTheme } from "@react-navigation/native";
import TextWrapper from "components/TextWrapper";
import { createButtonStyle } from "./Style";

const TouchableOpacityMultipleTapHandler = debounceHOC(Pressable);
export interface ButtonProps {
  buttonColor?: string;
  onPress: () => void;
  style?: string;
  text: string;
  isEnabled?: boolean;
  buttonStyle?: ViewStyle;
  textFontFamily?: string;
  textStyle?: TextStyle;
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: ImageStyle;
}

const CustomButton = (props: ButtonProps) => {
  const { colors } = useTheme();
  const isEnabled = props.isEnabled ?? true;
  const style = createButtonStyle(colors);
  return (
    <TouchableOpacityMultipleTapHandler
      onPress={props.onPress}
      style={[style.btnContainerStyle, props?.buttonStyle]}
      disabled={!isEnabled}
    >
      {props?.leftIcon && (
        <ImageComponent source={props?.leftIcon} style={style.leftIconStyle} />
      )}
      <TextWrapper
        style={[style.textStyle, props?.textStyle]}
        fontFamily={props?.textFontFamily ?? fonts.montserrat.medium}
      >
        {props.text}
      </TextWrapper>
    </TouchableOpacityMultipleTapHandler>
  );
};

export default CustomButton;
