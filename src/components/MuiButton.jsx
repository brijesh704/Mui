import React from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
const MuiButton = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>
        <Button variant="text">Button</Button>
      </Stack>
    </div>
  );
};

export default MuiButton;
