import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      style={{
        borderRadius: "5px",
        padding: "2px",
        margin: "15px",
        color: "white"
      }}
      color="secondary"
      name={name}
      onChange={handleChange}
      variant="filled"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      autoComplete="on"
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end"  aria-describedby="component-helper-text">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Input;
