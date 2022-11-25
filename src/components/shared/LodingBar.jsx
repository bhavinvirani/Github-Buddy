import { RepoState } from "context/RepoProvider";
import React from "react";
import LoadingBar from "react-top-loading-bar";

const LodingBar = () => {
  const { progress } = RepoState();
  return <LoadingBar color="blue" ref={progress} shadow={false} height={1} mb={0}/>;
};

export default LodingBar;
