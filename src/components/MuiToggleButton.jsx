import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
const MuiToggleButton = () => {
  const [format, setFormat] = React.useState([] || null);

  const handleChange = (e, newFormat) => {
    console.log(newFormat);
    setFormat(newFormat);
  };
  return (
    <div>
      <ToggleButtonGroup
        value={format}
        varient="outlined"
        aria-label="text formatting"
        size="small"
        color="success"
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value={"bold"} area-label="bold">
          <FormatBoldIcon />
        </ToggleButton>

        <ToggleButton value={"italic"} area-label="italic">
          <FormatItalicIcon />
        </ToggleButton>

        <ToggleButton value={"underlined"} aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default MuiToggleButton;
