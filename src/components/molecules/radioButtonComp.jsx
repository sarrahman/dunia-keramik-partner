import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/material";

export default function RadioButtonComp(props) {
    const color = props.color;

  const handleRadioChange = (event) => {
    // console.log(event.target.value);
    props.value(event.target.value);
  };

  return (
    <FormControl
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <FormLabel>Warna Website</FormLabel>
      <RadioGroup defaultValue={color[0]} onChange={handleRadioChange}>
        {color.map((color, index) => (
          <FormControlLabel
            key={index}
            value={`color${index + 1}`}
            control={<Radio />}
            label={
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {color.map((color, index) => (
                  <Box key={index} sx={{ bgcolor: color, mr: 1 }}>
                    +++
                  </Box>
                ))}
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
