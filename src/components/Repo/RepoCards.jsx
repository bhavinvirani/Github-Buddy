import { SimpleGrid } from "@chakra-ui/react";
import RepoCard from "components/Repo/Repo-card";
import { RepoState } from "context/RepoProvider";
import React from "react";
import { useLocation } from "react-router-dom";

const RepoCards = () => {
  const { repos, selectedLabel } = RepoState();
  const location = useLocation();
  const isBookmarkPage = location.pathname === "/bookmarks" ? true : false;
  const reposData = isBookmarkPage
    ? JSON.parse(localStorage.getItem("savedRepos")) || []
    : repos;

  let issuesLink = "/issues";
  const issueType =
    selectedLabel.value === "good-first-issues"
      ? '?q=is%3Aissue+is%3Aopen+label%3A"good+first+issue"'
      : '?q=is%3Aissue+is%3Aopen+label%3A"help+wanted"';
  issuesLink = issuesLink + issueType;

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
