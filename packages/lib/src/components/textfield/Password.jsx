import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Textfield } from ".";
import { forwardRef, useState } from "react";

export const Password = forwardRef(({ ...props }, ref) => {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Textfield
      required
      id="password"
      name="password"
      label="Password"
      type={visible ? "text" : "password"}
      fullWidth
      InputProps={{
        endAdornment: (
          <VisiblePasswordAdornment
            visible={visible}
            handleVisible={handleVisible}
          />
        ),
      }}
      ref={ref}
      {...props}
    />
  );
});

const VisiblePasswordAdornment = ({ visible, handleVisible }) => (
  <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleVisible}
      onMouseDown={(event) => event.preventDefault()}
    >
      {visible ? <Visibility /> : <VisibilityOff />}
    </IconButton>
  </InputAdornment>
);
