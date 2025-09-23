import React, { RefObject, useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStyles } from "./style/UserCard.style";
import DetailItem from "./DetailItem";
import { DetailItemData } from "models/GuestController";
import CounterButton from "components/counterButton";
import TextWrapper from "components/TextWrapper";
import { ICheckInDetail } from "models/QrDetail";
import { localStrings } from "shared/localization";

interface DetailsSectionProps {
  mobilePhone: string;
  numberOfGuest: number;
  checkedInGuest: number;
  checkedInAdults: number;
  checkedInKids: number;
  adults: number;
  kids: number;
  checkInData: RefObject<ICheckInDetail>;
}

const DetailsSection: React.FC<DetailsSectionProps> = ({
  mobilePhone,
  numberOfGuest,
  checkedInGuest,
  checkedInAdults,
  checkedInKids,
  adults,
  kids,
  checkInData,
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
      [{ label: localStrings.mobileNumber, value: formatPhoneNumber }],
      [{ label: localStrings.totalGuests, value: numberOfGuest }],
      [
        { label: localStrings.kids, value: kids },
        { label: localStrings.adults, value: adults },
      ],
      [{ label: localStrings.checkedInGuests, value: checkedInGuest }],
      [
        { label: localStrings.kids, value: checkedInKids },
        { label: localStrings.adults, value: checkedInAdults },
      ],
    ],
    [
      formatPhoneNumber,
      numberOfGuest,
      checkedInGuest,
      kids,
      adults,
      checkedInKids,
      checkedInAdults,
    ],
  );

  const checkInItems = useMemo(
    () => [
      {
        label: localStrings.checkedInKids,
        limit: kids - checkedInKids,
      },
      {
        label: localStrings.checkedInAdults,
        limit: adults - checkedInAdults,
      },
    ],
    [kids, checkedInKids, adults, checkedInAdults],
  );

  const renderCounterButtons = (
    item: { label: string; limit: number },
    index: number,
  ) => {
    const key = index === 1 ? "checkedInAdults" : "checkedInKids";
    const handleCounterData = (val: string) => {
      checkInData.current[key] = Number(val) ?? 0;
    };
    return (
      <CounterButton
        key={item.label}
        handleSelectedCount={handleCounterData}
        counterText={item.label}
        limit={item.limit}
        value={checkInData?.current[key]}
      />
    );
  };

  return (
    <View style={styles.detailsSection}>
      {detailRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.detailRow}>
          {row.map((item, itemIndex) =>
            [1, 3].includes(rowIndex) ? (
              <TextWrapper
                key={`${rowIndex}-${itemIndex}`}
                style={styles.guestCountText}
              >
                {`${item.label} : ${item.value}`}
              </TextWrapper>
            ) : (
              <DetailItem
                key={`${rowIndex}-${itemIndex}`}
                label={item.label}
                value={item.value}
                numberOfLines={item.numberOfLines}
              />
            ),
          )}
        </View>
      ))}
      <View style={styles.detailRow}>
        {checkInItems.map(renderCounterButtons)}
      </View>
    </View>
  );
};

export default DetailsSection;
