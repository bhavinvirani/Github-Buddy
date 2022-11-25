import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const Selector = ({ data, handleChange, lable, placeholder }) => {
  return (
    <Box>
      <FormControl>
        {/* <FormLabel
          size={"l"}
          htmlFor={lable}
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          {lable}
        </FormLabel> */}

        <Select
          variant="outline"
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        >
          {data.map(function (ele) {
            return (
              <option key={ele.value} value={ele.value}>
                {ele.label}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selector;
