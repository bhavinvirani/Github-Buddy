import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import NoRepo from "components/miscellaneous/NoRepo";
import RepoCards from "components/Repo/RepoCards";
import React, { useState } from "react";

const Bookmarks = () => {
  const savedRepos = JSON.parse(localStorage.getItem("savedRepos")) || [];
  const [bookmarkSearch, setBookmarkSearch] = useState("");


  const handleSearch = (repo) => {
    return (
      repo.name.includes(bookmarkSearch) ||
      repo.owner.login.includes(bookmarkSearch)
    );
  };

  const finalResult = savedRepos.filter(handleSearch);
  return (
    <>
      <Box px={6}>
        <Flex>
          <FormControl>
            <Input
              type="text"
              placeholder="Search"
              width={"full"}
              name="search"
              value={bookmarkSearch}
              onChange={(e) => setBookmarkSearch(e.target.value)}
            />
          </FormControl>
        </Flex>
      </Box>
      {savedRepos.length === 0 ? (
        <NoRepo
          text={"No Bookmarked Repositories"}
          description={"Explore Repositories and make them bookmark to save."}
        />
      ) : (
        <RepoCards  bookmarkResult={finalResult} query={bookmarkSearch} />
      )}
    </>
  );
};

export default Bookmarks;
