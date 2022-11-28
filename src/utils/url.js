export const getIssyesLink = (lable) => {
  let issuesLink = "/issues";
  const issueType =
    lable === "good-first-issues"
      ? '?q=is%3Aissue+is%3Aopen+label%3A"good+first+issue"'
      : '?q=is%3Aissue+is%3Aopen+label%3A"help+wanted"';
  return (issuesLink = issuesLink + issueType);
};
