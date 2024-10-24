import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function MuiRadio() {
  const [Gender, setGender] = React.useState([]);
  console.log({ Gender });
  let handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <Box width="250px">
        <FormControl fullWidth>
          <FormLabel>Gender</FormLabel>
          <RadioGroup value={Gender} row onChange={handleChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default MuiRadio;
