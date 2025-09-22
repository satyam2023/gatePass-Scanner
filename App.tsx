import React from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { useNetInfo } from "@react-native-community/netinfo";
import StatusCode from "core/StatusCode";
import { isAndroid } from "libs";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store/Store";
import Navigation from "./src/route";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "react-native-splash-screen";

LogBox.ignoreAllLogs();

if (__DEV__) {
  import("./ReactotronConfig").then(() =>
    console.log("Reactotron Configured for anandotsavScanner"),
  );
}
const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  const netInfo = useNetInfo({
    reachabilityUrl: "https://clients3.google.com/generate_204",
    reachabilityTest: async (response) =>
      response.status === StatusCode.SuccessNoContent,
    reachabilityLongTimeout: 60 * 1000,
    reachabilityShortTimeout: 5 * 1000,
    reachabilityRequestTimeout: 15 * 1000,
    reachabilityShouldRun: () => true,
    shouldFetchWiFiSSID: true,
    useNativeReachability: false,
  });
  console.log(netInfo);
  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    // Handle splash screen for different Android versions
    const hideSplash = () => {
      try {
        SplashScreen.hide();
      } catch (error) {
        console.log('SplashScreen hide error:', error);
      }
    };

    // Delay to ensure smooth transition
    setTimeout(hideSplash, 2000);
  }, [scheme, isDarkMode]);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
