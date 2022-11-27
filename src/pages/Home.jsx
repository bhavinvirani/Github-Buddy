import Controls from "components/RepoControls/Index";
import HomeBanner from "components/Home/HomeBanner";
import NoRepo from "components/Home/NoRepo";
import RepoCards from "components/Repo/RepoCards";
import React from "react";
import { fetchRepos } from "services";
import { RepoState } from "context/RepoProvider";

const Home = () => {
  const {
    repos,
    setIsFetching,
    setRepos,
    selectedLanguage,
    stars,
    searchText,
    selectedLabel,
    progress,
  } = RepoState();

  const handleSubmit = async () => {
    try {
      progress.current.continuousStart();
      setIsFetching(true);
      const data = await fetchRepos(
        selectedLanguage,
        stars,
        searchText,
        selectedLabel
      );
      setRepos(data.items);

      if (data) {
        progress.current.complete();
        setIsFetching(false);
        // saveUserPreference(stars, selectedLanguage, selectedLabel);
      }
    } catch (error) {
      progress.current.complete();
      setIsFetching(false);
    }
  };
  return (
    <>
      <HomeBanner />
      <Controls handleSubmit={handleSubmit} />
      {repos.length ? <RepoCards /> : <NoRepo />}
    </>
  );
};

export default Home;
