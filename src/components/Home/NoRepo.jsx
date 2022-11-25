import { InfoIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const NoRepo = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        No Repositories
      </Heading>
      <Text color={'gray.500'}>
        Repositories can be fetched based on language, label and no of Stars.
      </Text>
    </Box>
  );
};

export default NoRepo;
