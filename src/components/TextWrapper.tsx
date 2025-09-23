import React from "react";
/**
 * ? Local Imports
 */
import RNText, { IRNTextProps } from "components/RNText";

interface ITextWrapperProps extends IRNTextProps {
  children?: React.ReactNode;
  color?: string;
  fontFamily?: string;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  // fontFamily = fonts.montserrat.regular,
  children,
  ...rest
}) => {
  return (
    <RNText  {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
