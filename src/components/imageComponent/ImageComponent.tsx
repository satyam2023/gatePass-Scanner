import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

type FastImgProps = {
  imgUri: string | null;
  tintColor?: string;
  source?: never;
  style?: never;
};

type LocalImageProps = {
  imgUri?: never;
  fastImgStyle?: never;
  tintColor?: never;
  resizeMode?: never;
  source: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
};

type ImageComponentProps = FastImgProps | LocalImageProps;

const ImageComponent: React.FC<ImageComponentProps> = ({ style, source }) => {
  return (
    <React.Fragment>
      <Image style={[styles.imageStyle, style]} source={source} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "contain",
  },
});

export default ImageComponent;
