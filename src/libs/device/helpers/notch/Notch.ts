/* eslint-disable camelcase */
import { Dimensions, ScaledSize, Platform, StatusBar } from "react-native";

const DEFAULT_STATUSBAR_HEIGHT = 30;

// iPhone screen heights (points)
const iPhoneSE_HEIGHT = 568;
const iPhoneX_HEIGHT = 812;
const iPhoneXsMax_HEIGHT = 896;
const iPhone11Pro_HEIGHT = 812;
const iPhone11ProMax_HEIGHT = 896;
const iPhone12Mini_HEIGHT = 812;
const iPhone12ProMax_HEIGHT = 926;
const iPhone14_HEIGHT = 844;
const iPhone14Plus_HEIGHT = 926;
const iPhone14Pro_HEIGHT = 852;
const iPhone14ProMax_HEIGHT = 932;

// iPhone 15 Series
const iPhone15_HEIGHT = 852;
const iPhone15Plus_HEIGHT = 932;
const iPhone15Pro_HEIGHT = 852;
const iPhone15ProMax_HEIGHT = 932;

// iPhone 16 Series
const iPhone16_HEIGHT = 852;
const iPhone16Plus_HEIGHT = 932;
const iPhone16Pro_HEIGHT = 874;
const iPhone16ProMax_HEIGHT = 956;

// Matchers
const isIPhoneSE = (dim: ScaledSize) => dim.height === iPhoneSE_HEIGHT;
const isIPhoneX = (dim: ScaledSize) => dim.height === iPhoneX_HEIGHT;
const isIPhoneXsMax = (dim: ScaledSize) => dim.height === iPhoneXsMax_HEIGHT;
const isIPhone11Pro = (dim: ScaledSize) => dim.height === iPhone11Pro_HEIGHT;
const isIPhone11ProMax = (dim: ScaledSize) =>
  dim.height === iPhone11ProMax_HEIGHT;
const isIPhone12Mini = (dim: ScaledSize) => dim.height === iPhone12Mini_HEIGHT;
const isIPhone12ProMax = (dim: ScaledSize) =>
  dim.height === iPhone12ProMax_HEIGHT;

const isIPhone14 = (dim: ScaledSize) => dim.height === iPhone14_HEIGHT;
const isIPhone14Plus = (dim: ScaledSize) => dim.height === iPhone14Plus_HEIGHT;
const isIPhone14Pro = (dim: ScaledSize) => dim.height === iPhone14Pro_HEIGHT;
const isIPhone14ProMax = (dim: ScaledSize) =>
  dim.height === iPhone14ProMax_HEIGHT;

const isIPhone15 = (dim: ScaledSize) => dim.height === iPhone15_HEIGHT;
const isIPhone15Plus = (dim: ScaledSize) => dim.height === iPhone15Plus_HEIGHT;
const isIPhone15Pro = (dim: ScaledSize) => dim.height === iPhone15Pro_HEIGHT;
const isIPhone15ProMax = (dim: ScaledSize) =>
  dim.height === iPhone15ProMax_HEIGHT;

const isIPhone16 = (dim: ScaledSize) => dim.height === iPhone16_HEIGHT;
const isIPhone16Plus = (dim: ScaledSize) => dim.height === iPhone16Plus_HEIGHT;
const isIPhone16Pro = (dim: ScaledSize) => dim.height === iPhone16Pro_HEIGHT;
const isIPhone16ProMax = (dim: ScaledSize) =>
  dim.height === iPhone16ProMax_HEIGHT;

// General detection (includes all with a notch or newer layout)
const detection = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14(dim) ||
      isIPhone14Plus(dim) ||
      isIPhone14Pro(dim) ||
      isIPhone14ProMax(dim) ||
      isIPhone15(dim) ||
      isIPhone15Plus(dim) ||
      isIPhone15Pro(dim) ||
      isIPhone15ProMax(dim) ||
      isIPhone16(dim) ||
      isIPhone16Plus(dim) ||
      isIPhone16Pro(dim) ||
      isIPhone16ProMax(dim) ||
      isIPhone12Mini(dim) ||
      isIPhone12ProMax(dim) ||
      isIPhone11Pro(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhoneX(dim) ||
      isIPhoneXsMax(dim) ||
      isIPhoneSE(dim))
  );
};

// Notch-only detection (no Dynamic Island)
const detectionNotchOnly = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14(dim) ||
      isIPhone14Plus(dim) ||
      isIPhone15(dim) ||
      isIPhone15Plus(dim) ||
      isIPhone16(dim) ||
      isIPhone16Plus(dim) ||
      isIPhone12Mini(dim) ||
      isIPhone12ProMax(dim) ||
      isIPhone11Pro(dim) ||
      isIPhone11ProMax(dim) ||
      isIPhoneX(dim) ||
      isIPhoneXsMax(dim) ||
      isIPhoneSE(dim))
  );
};

// Dynamic Island support detection
const detectionForDynamicIsland = (): boolean => {
  const dim = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhone14Pro(dim) ||
      isIPhone14ProMax(dim) ||
      isIPhone15Pro(dim) ||
      isIPhone15ProMax(dim) ||
      isIPhone16Pro(dim) ||
      isIPhone16ProMax(dim))
  );
};

const hasNotch = (): boolean => detection();
const hasNotchOnly = (): boolean => detectionNotchOnly();
const hasDynamicIsland = (): boolean => detectionForDynamicIsland();

const getStatusBarHeight = (): number => {
  return (
    Platform.select({
      ios: hasNotch() ? 44 : DEFAULT_STATUSBAR_HEIGHT,
      android: StatusBar.currentHeight || DEFAULT_STATUSBAR_HEIGHT,
    }) || DEFAULT_STATUSBAR_HEIGHT
  );
};

export { getStatusBarHeight, hasNotch, hasNotchOnly, hasDynamicIsland };
