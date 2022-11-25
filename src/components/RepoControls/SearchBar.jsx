import { Box, FormControl, Input } from '@chakra-ui/react';
import React from 'react';

const SearchBar = ({searchText, setSearchText}) => {
  return (
    <Box>
      <FormControl>
        <Input
          type="text"
          placeholder="Search"
          width={{base:"xl", md:"3xl"}}
          name="search"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
