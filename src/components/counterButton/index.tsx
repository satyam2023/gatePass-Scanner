import Glyphs from "assets/Glyphs";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { localStrings } from "shared/localization";
import { useTheme } from "@react-navigation/native";
import { styles } from "./Style";
import TextWrapper from "components/TextWrapper";
import PressableImage from "components/pressableImage";

interface ICounterButtonProps {
  handleSelectedCount: (value: string) => void;
  value?: number;
  limit?: number;
  counterText?: string;
}

const CounterButton: React.FC<ICounterButtonProps> = ({
  handleSelectedCount,
  value = 0,
  limit = 100,
  counterText,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const isLimitReached: boolean = inputValue >= limit;
  const isMinusBtnDisable: boolean = [1, 0].includes(inputValue);

  const { colors } = useTheme();
  const style = (isDisable?: boolean) => styles(colors, isDisable);

  const increment = () => {
    if (inputValue >= limit) return;
    handleSelectedCount((inputValue + 1).toString());
    setInputValue(inputValue + 1);
  };

  const decrement = () => {
    if (inputValue === 0) return;
    handleSelectedCount((inputValue - 1).toString());
    setInputValue(inputValue - 1);
  };

  return (
    <View style={style().container}>
      <PressableImage
        src={Glyphs.Minus}
        onPress={decrement}
        containerStyle={style(isMinusBtnDisable).incrementDecrementContainer}
        imageStyle={style().img}
        isDisable={isMinusBtnDisable}
      />
      <TextWrapper style={style().countInput}>
        {inputValue} {counterText ?? localStrings.guestCheckIn}
      </TextWrapper>
      <PressableImage
        src={Glyphs.Plus}
        onPress={increment}
        containerStyle={style(isLimitReached).incrementDecrementContainer}
        imageStyle={style().img}
        isDisable={isLimitReached}
      />
    </View>
  );
};

export default React.memo(CounterButton);
