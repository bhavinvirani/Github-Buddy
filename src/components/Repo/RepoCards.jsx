import { SimpleGrid } from "@chakra-ui/react";
import RepoCard from "components/Repo/Repo-card";
import { RepoState } from "context/RepoProvider";
import React from "react";
import { useLocation } from "react-router-dom";
import { getIssyesLink } from "utils/url";
import {useEffect} from 'react';

const RepoCards = ({ bookmarkResult, query }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("Bookmarks changed")
    
  }, [bookmarkResult])

  const { repos, selectedLabel, setBookmarkedRepos } = RepoState();

  const isBookmarkPage = location.pathname === "/bookmarks" ? true : false;

//! try to both variables(reposData) one by one
//* files to lookout ==>>  pages/Bookmarks.jsx, components/repo/RepoCards 
//* and context if you need

//TODO: search working
  // const reposData = isBookmarkPage ? bookmarkResult || [] : repos;
 
  
  //TODO: bookmark toggle working
  let reposData = isBookmarkPage
  ? JSON.parse(localStorage.getItem("savedRepos")) || bookmarkResult
  : repos;
  
  // Added by Advait for filtered repos if query is passed
  if(query){
    reposData = isBookmarkPage ? bookmarkResult || [] : repos;
  }


  let issuesLink = getIssyesLink(selectedLabel.value);

  const handleBookmark = (repo) => {
    let savedRepos = JSON.parse(localStorage.getItem("savedRepos")) || [];
    const findRepoIndex = savedRepos.findIndex(
      (savedRepo) => savedRepo.id === repo.id
    );

    if (findRepoIndex > -1) {
      savedRepos.splice(findRepoIndex, 1);
    } else {
      savedRepos = [...savedRepos, repo];
    }
    localStorage.setItem("savedRepos", JSON.stringify(savedRepos));
    setBookmarkedRepos(savedRepos);
  };

  const isBookmarkedRepo = (id) => {
    if (isBookmarkPage) {
      return true;
    }
    let savedRepos = JSON.parse(localStorage.getItem("savedRepos")) || [];

    const findRepoIndex = savedRepos.findIndex(
      (savedRepo) => savedRepo.id === id
    );

    return findRepoIndex > -1 ? true : false;
  };

  return (
    <SimpleGrid
      columns={isBookmarkPage ? 3 : 4}
      spacing={2}
      p={"24px"}
      py={"12px"}
    >
      {reposData.map((repo) => {
        return (
          <RepoCard
            isBookmarkPage={isBookmarkPage}
            handleBookmark={handleBookmark}
            isBookmarkedRepo={isBookmarkedRepo}
            repo={repo}
            key={repo.id}
            open_issues_url={issuesLink}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default RepoCards;
