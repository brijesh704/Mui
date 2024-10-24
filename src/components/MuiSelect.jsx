import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

const MuiSelect = () => {
  const [countries, setCountries] = React.useState([]);
  console.log({ countries });

  const handleChange = (e) => {
    let value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <Box width="250px">
        <TextField
          label="select Your Country"
          select
          fullWidth
          value={countries}
          onChange={handleChange}
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </TextField>
      </Box>
    </div>
  );
};

export default MuiSelect;
