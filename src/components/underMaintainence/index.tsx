import { Image, Text, View } from "react-native";
import React from "react";
import Glyphs from "assets/Glyphs";
import { styles } from "./Style";
import { localStrings } from "shared/localization";

const UnderMaintenance: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Glyphs.Maintenance} style={styles.image} />
      <Text style={styles.message}>{localStrings.maintenanceMsg}</Text>
    </View>
  );
};

export default UnderMaintenance;
