import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { forwardRef } from "react";

// const useStyles = makeStyles(() => ({
//   root: (props) => ({
//     pointerEvents: props.disabled && 'none',
//   }),
//   disabled: {
//     backgroundColor: '#ECECEC',
//   },
// }));'

const TextfieldStyles = {
  // "& label.Mui-focused": {
  //   color: "green",
  // },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "green",
  // },
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     borderColor: "red",
  //   },
  //   "&:hover fieldset": {
  //     borderColor: "yellow",
  //   },
  //   "&.Mui-focused fieldset": {
  //     borderColor: "green",
  //   },
  // },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "#ECECEC",
  },
};

export const Textfield = forwardRef(
  (
    {
      InputProps,
      onEnter = null,
      value,
      setValue = null,
      variant = "outlined",
      suffix = null,
      allowClear = true,
      onChange = null,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const handleKeyPressEnter = (event) => {
      if (event.key === "Enter") {
        onEnter && onEnter(event);
      }
    };

    return styled(
      <TextField
        variant={variant}
        fullWidth
        inputRef={ref}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onKeyPress={handleKeyPressEnter}
        // InputProps={{ ...InputProps, classes: { disabled: classes.disabled } }}
        // className={classes.root}
        {...props}
      />
    )(TextfieldStyles);
  }
);
