import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Selector from "components/RepoControls/Selector";
import SliderThumbWithTooltip from "components/RepoControls/Slider";
import { langOptions } from "Data/langaugeOptions";
import SearchBar from "components/RepoControls/SearchBar";
import { lableOptions } from "Data/lableOptions";
import { RepoState } from "context/RepoProvider";

const Controls = ({ handleSubmit }) => {
  const {
    isFetching,
    stars,
    setStars,
    setSelectedLanguage,
    setSeleectedLabel,
    searchText,
    setSearchText,
  } = RepoState();

  const handleLanguagesChange = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleLableChange = (selectedLabel) => {
    setSeleectedLabel(selectedLabel);
  };

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      mx={"auto"}
      my={"16px"}
      p="16px"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={"center"}
        gap={{ md: "12", base: "6" }}
      >
        <Flex direction={"column"} alignItems="center">
          <Flex pb={4} gap={4}>
            <FormControl>
              <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </FormControl>
          </Flex>

          <Flex>
            <FormControl>
              <FormLabel
                size={"xl"}
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Repository Stars
              </FormLabel>
              <SliderThumbWithTooltip
                sliderValue={stars}
                setSliderValue={setStars}
              />
            </FormControl>
          </Flex>
        </Flex>

        <Flex direction={"column"} gap={8}>
          <Selector
            lable={"Languages"}
            placeholder={"All Languages"}
            data={langOptions}
            handleChange={handleLanguagesChange}
          />
          <Selector
            lable={"Lable"}
            data={lableOptions}
            handleChange={handleLableChange}
          />
        </Flex>
      </Flex>

      <Flex justifyContent={"center"} mt={{ base: "4", md: "8" }}>
        <Button
          colorScheme="teal"
          isLoading={isFetching}
          type="submit"
          onClick={handleSubmit}
        >
          Explore
        </Button>
      </Flex>
    </Box>
  );
};

export default Controls;
