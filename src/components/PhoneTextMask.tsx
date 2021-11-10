import * as React from "react";
import MaskedInput from "react-text-mask";

interface Props {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const PhoneTextMask: React.FC<Props> = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "1",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

export const PhoneMaskInitialValue = "(   )   -    ";

export const phoneNumberIsValid = (num: string): boolean => {
  if (!/[0-9]/.test(num)) {
    return true;
  }
  return /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/.test(num);
};

export const parsePhoneNum = (p: string): string => {
  const digits = p.match(/\(([0-9]{3})\) ([0-9]{3})-([0-9]{4})/);

  if (!digits) return "";

  return `+1${digits[1]}${digits[2]}${digits[3]}`;
};

export default PhoneTextMask;
