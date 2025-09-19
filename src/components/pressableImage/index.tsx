import {
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  TextStyle,
} from "react-native";
import TextWrapper from "components/TextWrapper";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { debounceHOC } from "hocs/debounceHOC";
import { createPressableImageStyle } from "./Style";
import ImageComponent from "components/imageComponent/ImageComponent";

interface IPressableButton {
  onPress?: () => void;
  src?: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  text?: string;
  textStyle?: TextStyle;
  containerStyle?: StyleProp<TextStyle>;
  isDisable?: boolean;
}

const PressableButton = debounceHOC(Pressable);

export const PressableImage = ({
  onPress,
  src,
  imageStyle,
  text,
  textStyle,
  containerStyle,
  isDisable = false,
}: IPressableButton) => {
  const { colors } = useTheme();
  const style = createPressableImageStyle(colors);
  return (
    <PressableButton
      onPress={onPress}
      style={[style.container, containerStyle]}
      disabled={isDisable}
    >
      {src && (
        <ImageComponent source={src} style={[style.iconImg, imageStyle]} />
      )}
      {text && (
        <TextWrapper style={[style.textStyle, textStyle]}>{text}</TextWrapper>
      )}
    </PressableButton>
  );
};

export default PressableImage;
