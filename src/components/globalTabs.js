import { AppBar, Box, Divider, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import BrandsSlider from "./brands-slider/brandsSlider";

const GlobalTabs = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#76b740",
            },
            "& .MuiTab-root": {
              width: "185px",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#76b740", // Customize the indicator color here
            },
          }}
        >
          {tabs?.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
      </div>

      {/* Content for each tab */}
      {tabs?.map((tab, index) => (
        <div key={index} hidden={value !== index}>
          {value === index && tab.content}
        </div>
      ))}
      <Box sx={{ mt: "20px" }}>
        <BrandsSlider />
      </Box>
    </Box>
  );
};

export default GlobalTabs;
