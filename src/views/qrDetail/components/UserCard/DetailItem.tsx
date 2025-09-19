import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";

interface DetailItemProps {
  label: string;
  value: string | number;
  numberOfLines?: number;
}

const DetailItem: React.FC<DetailItemProps> = ({
  label,
  value,
  numberOfLines = 1,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text
        style={styles.detailValue}
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
      >
        {value}
      </Text>
    </View>
  );
};

export default React.memo(DetailItem);
