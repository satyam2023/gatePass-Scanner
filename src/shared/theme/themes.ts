import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export interface IAppColors {
  primary: string;
  red: string;
  disableButtonColor: string;
  disableTextColor: string;
  lightTextColor: string;
  green: string;
  borderColor: string;
  darkGray: string;
  smokeGray: string;
  white: string;
  grayishBlack: string;
  mutedGray: string;
  lightSilver: string;
  ghostWhite: string;
  black: string;
  amber: string;
  primaryBlue: string;
  lightBlackColor: string;
  softCloudBlue: string;
  transparentBlack: string;
}

export const palette: IAppColors = {
  primary: "#1072bd",
  red: "#D71921",
  disableButtonColor: "#DCDCDC",
  disableTextColor: "#A0A0A0",
  lightTextColor: "#555555",
  green: "#2EBF0A",
  borderColor: "#777777",
  darkGray: "#474747",
  smokeGray: "#D8D8D8",
  white: "#fff",
  grayishBlack: "#5C5C5C",
  mutedGray: "#E4E4E4",
  lightSilver: "#D9D9D9",
  ghostWhite: "#F0F0F0",
  black: "#000000",
  amber: "#FFC000",
  primaryBlue: "#1072bd",
  lightBlackColor: "#a0a099",
  softCloudBlue: "#E0E7EE",
  transparentBlack: "rgba(0, 0, 0, 0.3)",
};
export type IColors = IAppColors & typeof DefaultTheme.colors;

export const LightTheme: ExtendedTheme & { colors: IColors } = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme & { colors: IColors } = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#E0E0E0",
    red: "#FF4C4C",
    disableButtonColor: "#3E3E3E",
    disableTextColor: "#6E6E6E",
    lightTextColor: "#BBBBBB",
    green: "#56E170",
    borderColor: "#444444",
    darkGray: "#C0C0C0",
    smokeGray: "#8C8C8C",
    white: "#1C1C1C",
    grayishBlack: "#2E2E2E",
    mutedGray: "#606060",
    lightSilver: "#707070",
    ghostWhite: "#2C2C2C",
    black: "#000000",
    amber: "#FFC000",
    primaryBlue: "#1072bd",
    lightBlackColor: "#a0a099",
    softCloudBlue: "#E0E7EE",
    transparentBlack: "rgba(0, 0, 0, 0.5)",
  },
};
