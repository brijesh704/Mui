import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormLabel,
} from "@mui/material";
import React from "react";

const MuiCheckbox = () => {
  const [TechStack, setTechStack] = React.useState([]);
  console.log({ techStack: TechStack });

  const handleChange = (e) => {
    const index = TechStack.indexOf(e.target.value);
    if (index === -1) {
      setTechStack([...TechStack, e.target.value]);
    } else {
      setTechStack(TechStack.filter((item) => item !== e.target.value));
    }
  };
  return (
    <div>
      <FormControl>
        <FormLabel>Tech Stack</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="HTML"
            control={
              <Checkbox
                value="html"
                onChange={handleChange}
                checked={TechStack.includes("html")}
              />
            }
          />
          <FormControlLabel
            label="react"
            control={
              <Checkbox
                value="react"
                onChange={handleChange}
                checked={TechStack.includes("react")}
              />
            }
          />
          <FormControlLabel
            label="angular"
            control={
              <Checkbox
                value="angular"
                onChange={handleChange}
                checked={TechStack.includes("angular")}
              />
            }
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default MuiCheckbox;
