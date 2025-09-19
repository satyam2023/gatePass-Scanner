import { palette } from "@theme/themes";
import { getStatusBarHeight } from "libs";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface IStyle {
  loggerContainer: ViewStyle;
  toggleButton: ViewStyle;
  toggleText: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  loggerContainer: {
    flex: 1,
    flexGrow: 2,
    paddingTop: getStatusBarHeight(),
  },
  toggleButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    padding: 5,
    backgroundColor: palette.danger,
    zIndex: 1,
    borderRadius: 10,
  },
  toggleText: {
    fontSize: 30,
  },
});

export default styles;
