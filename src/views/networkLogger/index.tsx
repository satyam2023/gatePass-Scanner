import React, { useState } from "react";
import { Modal, View } from "react-native";
import NetworkLogger from "react-native-network-logger";
import NetworkLoggerButton from "./NetworkLoggerButton";
import styles from "./Style";

const NetworkLoggerScreen: React.FC = () => {
  const [showNetworkLogger, setNetworkLogger] = useState<boolean>(false);
  if (!__DEV__) return null;

  const toggleLogger = () => setNetworkLogger(!showNetworkLogger);
  const icon = showNetworkLogger ? "🔙" : "🛜";

  return (
    <React.Fragment>
      {showNetworkLogger ? (
        <Modal visible>
          <View style={styles.loggerContainer}>
            <NetworkLogger compact />
            <NetworkLoggerButton onPress={toggleLogger} icon={icon} />
          </View>
        </Modal>
      ) : (
        <NetworkLoggerButton onPress={toggleLogger} icon={icon} />
      )}
    </React.Fragment>
  );
};

export default NetworkLoggerScreen;
