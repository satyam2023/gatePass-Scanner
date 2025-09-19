/**
 * @format
 */
import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { startNetworkLogging } from 'react-native-network-logger';

startNetworkLogging({
  ignoredPatterns: [
    /https?:\/\/clients3\.google\.com\/.*/,
  ],
});


AppRegistry.registerComponent(appName, () => App);
