import { InfoIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const NoRepo = ({text, description}) => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        {text}
      </Heading>
      <Text color={'gray.500'}>
        {description}
      </Text>
    </Box>
  );
};

export default NoRepo;
