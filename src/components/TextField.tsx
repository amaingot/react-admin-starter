import * as React from "react";
import MUITextField, { TextFieldProps } from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import PhoneTextMask, { phoneNumberIsValid } from "../components/PhoneTextMask";

interface Props {
  hide?: boolean;
  withBottomGutter?: boolean;
}

const useStyles = makeStyles((theme) => ({
  withBottomGutter: {
    marginBottom: theme.spacing(2),
  },
}));

type CombinedProps = Props & TextFieldProps;

const TextField: React.FC<CombinedProps> = (props) => {
  const classes = useStyles();

  const {
    id,
    name = props.id,
    variant = "outlined",
    fullWidth = true,
    type,
    InputProps = {},
    value = "",
    error = false,
    hide = false,
    withBottomGutter = false,
    className,
    ...others
  } = props;

  if (hide === true) {
    return <></>;
  }

  const isPhone = props.type === "tel";
  // const isEmail = props.type === "email";

  const updatedInputProps = isPhone
    ? ({
        ...InputProps,
        inputComponent: PhoneTextMask,
      } as any)
    : InputProps;

  let updatedError = error;

  if (isPhone) {
    updatedError =
      updatedError || (typeof value === "string" && !phoneNumberIsValid(value));
  }

  return (
    <MUITextField
      className={clsx(className, withBottomGutter && classes.withBottomGutter)}
      id={id}
      name={name}
      variant={variant as any}
      error={updatedError}
      fullWidth={fullWidth}
      type={type}
      InputProps={updatedInputProps}
      {...others}
    />
  );
};

export default TextField;
