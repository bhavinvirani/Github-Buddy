import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={2}>
          <Stack align="center">
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
          </Stack>

          <VStack
            as="form"
            boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            h="max-content !important"
            bg={useColorModeValue('white', 'gray.700')}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={4}
          >
            <VStack spacing={2} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input rounded="md" type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input rounded="md" type={show ? 'text' : 'password'} />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      rounded="md"
                      bg={useColorModeValue('gray.300', 'gray.700')}
                      _hover={{
                        bg: useColorModeValue('gray.400', 'gray.800'),
                      }}
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </VStack>

            <VStack w="100%">
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: 'green.500',
                }}
                rounded="md"
                w="100%"
              >
                Sign up
              </Button>
              {/* GitHub */}
              <Button
                w={'full'}
                bg={useColorModeValue('gray.300', 'gray.800')}
                _hover={{
                  bg: useColorModeValue('gray.300', 'gray.600'),
                }}
                leftIcon={<FaGithub />}
              >
                <Center>
                  <Text>Continue with github</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </VStack>

            <Stack>
              <Text align={'center'}>
                Already a user? <Link href='/signin' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Signup;
