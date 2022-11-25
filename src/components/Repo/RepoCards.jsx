import { SimpleGrid } from "@chakra-ui/react";
import RepoCard from "components/Repo/Repo-card";
import { RepoState } from "context/RepoProvider";
import React from "react";

const RepoCards = () => {
  const { repos, selectedLabel } = RepoState();

  let issuesLink = "/issues";
  const issueType =
    selectedLabel.value === "good-first-issues"
      ? '?q=is%3Aissue+is%3Aopen+label%3A"good+first+issue"'
      : '?q=is%3Aissue+is%3Aopen+label%3A"help+wanted"';
  issuesLink = issuesLink + issueType;

  return (
    <SimpleGrid minChildWidth="320px" spacing={2} p={"24px"} py={"12px"}>
      {repos.map((repo) => {
        return (
          <RepoCard repo={repo} key={repo.id} open_issues_url={issuesLink} />
        );
      })}
    </SimpleGrid>
  );
};

export default RepoCards;
