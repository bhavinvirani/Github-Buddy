import { createContext, useContext, useRef, useState } from "react";

const Repo = createContext();

const RepoContext = ({ children }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [stars, setStars] = useState(25);
  const [searchText, setSearchText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLabel, setSeleectedLabel] = useState("good-first-issues");

  const [repos, setRepos] = useState([]);
  const [bookmarkedRepos, setBookmarkedRepos] = useState([]);
  const progress = useRef(null);


  return (
    <Repo.Provider
      value={{
        isFetching,
        progress,
        setIsFetching,
        stars,
        setStars,
        searchText,
        setSearchText,
        selectedLanguage,
        setSelectedLanguage,
        selectedLabel,
        setSeleectedLabel,
        repos,
        setRepos,
        bookmarkedRepos,
        setBookmarkedRepos,
      }}
    >
      {children}
    </Repo.Provider>
  );
};

export const RepoState = () => {
  return useContext(Repo);
};

export default RepoContext;
