import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import DetailItem from "./DetailItem";
import { DetailItemData } from "models/GuestController";

interface DetailsSectionProps {
  department: string;
  locationName: string;
  email: string;
  mobilePhone: string;
  numberOfGuest: number;
  checkedInGuest: number;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({
  department,
  locationName,
  email,
  mobilePhone,
  numberOfGuest,
  checkedInGuest,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const formatPhoneNumber = useMemo(() => {
    if (mobilePhone && mobilePhone.length === 10) {
      return `+91 ${mobilePhone.substring(0, 5)} ${mobilePhone.substring(5)}`;
    }
    return mobilePhone;
  }, [mobilePhone]);

  const detailRows: DetailItemData[][] = useMemo(
    () => [
      [
        { label: "Department", value: department },
        { label: "Location", value: locationName },
      ],
      [{ label: "Email", value: email, numberOfLines: 1 }],
      [{ label: "Mobile Number", value: formatPhoneNumber }],
      [
        { label: "Total Guests", value: numberOfGuest },
        { label: "Checked-in Guests", value: checkedInGuest },
      ],
    ],
    [
      department,
      locationName,
      email,
      formatPhoneNumber,
      numberOfGuest,
      checkedInGuest,
    ],
  );

  return (
    <View style={styles.detailsSection}>
      {detailRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.detailRow}>
          {row.map((item, itemIndex) => (
            <DetailItem
              key={`${rowIndex}-${itemIndex}`}
              label={item.label}
              value={item.value}
              numberOfLines={item.numberOfLines}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default DetailsSection;
