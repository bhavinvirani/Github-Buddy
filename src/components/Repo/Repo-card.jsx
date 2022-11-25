import * as React from "react";
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { GoIssueOpened } from "react-icons/go";
import moment from "moment";

const RepoCard = ({ open_issues_url, repo }) => {
  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };
  const dateFormate = (date) => {
    return moment.utc(date).format("LL");
  }
  return (
    <Card
      rounded="xl"
      borderWidth="1px"
      bg={useColorModeValue("white", "gray.700")}
      borderColor={useColorModeValue("gray.200", "gray.600")}
      _hover={{
        shadow: "2xl",
        textDecoration: "none",
      }}
      maxW="l"
      size={"sm"}
    >
      <CardHeader>
        <Flex justifyContent="space-between">
          <Tooltip hasArrow label="View Profile" placement="top">
            <HStack
              cursor="pointer"
              onClick={(e) => handleLinkClick(e, repo.owner.html_url)}
            >
              <Avatar name={repo.owner.login} src={repo.owner.avatar_url} />
              <Text fontSize="lg" noOfLines={1} fontWeight="400" align="left">
                {repo.owner.login}
              </Text>
            </HStack>
          </Tooltip>

          <VStack alignItems={"end"}>
            <Flex
              _hover={{ color: "blue.500" }}
              cursor="pointer"
              onClick={(e) => handleLinkClick(e, repo.html_url)}
            >
              <Icon as={FiExternalLink} boxSize="1.4em" />
            </Flex>

            <HStack>
              <Tooltip hasArrow label="Stars" placement="bottom">
                <Flex alignItems="center">
                  <Icon as={BiStar} boxSize="1.2em" mt="1px" />
                  <Box as="span" ml={"1px"} pt={1} fontSize="md">
                    {repo.stargazers_count}
                  </Box>
                </Flex>
              </Tooltip>
              {repo.forks_count && (
                <Tooltip hasArrow label="Forks" placement="bottom">
                  <Flex alignItems="center">
                    <Icon as={BiGitRepoForked} boxSize="1.2em" mt="1px" />
                    <Box as="span" ml={"1px"} pt={1} fontSize="md">
                      {repo.forks_count}
                    </Box>
                  </Flex>
                </Tooltip>
              )}
            </HStack>
          </VStack>
        </Flex>

        <Flex width="100%">
          <Tooltip hasArrow label="View Repository" placement="right">
            <HStack
              cursor="pointer"
              onClick={(e) =>
                handleLinkClick(e, repo.owner.html_url + "/" + repo.name)
              }
            >
              <Flex _hover={{ color: "blue.500" }}>
                <Text fontSize="xl" fontWeight="600" align="left">
                  {repo.name}
                </Text>
              </Flex>
            </HStack>
          </Tooltip>
        </Flex>
      </CardHeader>

      <CardBody py={0}>
        <Flex justifyContent="space-between" width="100%">
          <VStack>
            {repo.language && (
              <Flex justifyContent="space-between" width="100%">
                <Box>
                  <HStack>
                    <Tag size="sm" colorScheme="blue">
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {repo.language}
                      </Text>
                    </Tag>
                  </HStack>
                </Box>
              </Flex>
            )}
            <Box>
              <Text
                color="gray.400"
                fontSize="sm"
                noOfLines={2}
                textAlign="left"
              >
                {repo.description}
              </Text>
            </Box>
          </VStack>
        </Flex>
      </CardBody>

      <CardFooter>
        <Flex alignItems="center" width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
              Created at - {dateFormate(repo.created_at)}
            </Text>
            <Tooltip hasArrow label="Isuues" placement="bottom">
              <Flex
                onClick={(e) =>
                  handleLinkClick(e, repo.html_url + open_issues_url)
                }
                _hover={{ color: "blue.500" }}
              >
                <Icon as={GoIssueOpened} boxSize="1.2em" mt="1px" />
                <Box as="span" ml={1} fontSize="md">
                  {repo.open_issues}
                </Box>
              </Flex>
            </Tooltip>
          </HStack>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;
