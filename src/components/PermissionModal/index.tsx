import AppHeader from "components/Header";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { localStrings } from "shared/localization";

const CameraPermissionScreen = () => {
  return (
    <React.Fragment>
      <AppHeader headerTitle={localStrings.qrScanner} />
      <View style={styles.container}>
        <Text style={styles.title}>{localStrings.cameraAccessNeeded}</Text>
        <Text style={styles.message}>{localStrings.cameraPermissionMsg}</Text>
        <TouchableOpacity style={styles.button} onPress={Linking.openSettings}>
          <Text style={styles.buttonText}>{localStrings.openSetting}</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default CameraPermissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    color: "#333",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
