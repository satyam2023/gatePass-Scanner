import { Pressable, Text } from "react-native";
import React from "react";
import styles from "./Style";

interface INetworkLoggerButton {
  onPress: () => void;
  icon: string;
}
const NetworkLoggerButton: React.FC<INetworkLoggerButton> = ({
  onPress,
  icon,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.toggleButton}>
      <Text style={styles.toggleText}>{icon}</Text>
    </Pressable>
  );
};

export default NetworkLoggerButton;
