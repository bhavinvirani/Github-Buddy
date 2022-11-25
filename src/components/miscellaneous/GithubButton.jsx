import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const GithubButton = props => {
  return (
    <IconButton
      as={'a'}
      target={"_blank"}
      href={"https://github.com/bhavinvirani/Github-Buddy"}
      size="md"
      fontSize="lg"
      aria-label={`Go to Github`}
      color="current"
      marginLeft="2"
      icon={<FaGithub />}
      {...props}
    />
  );
};
