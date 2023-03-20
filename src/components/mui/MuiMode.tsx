import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import React from "react";

const MuiMode = () => {
  const theme = useTheme();

  return (
    <div>
      <Typography component="h1"> {`${theme.palette.mode} mode`} </Typography>
    </div>
  );
}; 

export default MuiMode;
