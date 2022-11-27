import NoRepo from "components/Home/NoRepo";
import RepoCards from "components/Repo/RepoCards";
import React from "react";

const Bookmarks = () => {
  const savedRepos = JSON.parse(localStorage.getItem("savedRepos")) || [];

  return <>{savedRepos.length ? <RepoCards /> : <NoRepo />}</>;
};

export default Bookmarks;
