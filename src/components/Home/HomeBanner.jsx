import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
import { FaFile } from 'react-icons/fa';
  import {  GoTerminal } from 'react-icons/go';
  
 
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'4'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function HomeBanner() {
    return (
      <Box maxW="4xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={6}
          fontWeight={'bold'}>
          Find GitHub repositories to contribute
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Users'}
            stat={'83 Million'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Repositories'}
            stat={'200 Million'}
            icon={<FaFile size={'3em'} />}
          />
          <StatsCard
            title={'Collobration On Projects'}
            stat={'49 Million'}
            icon={<GoTerminal size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }