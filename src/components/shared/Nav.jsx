import { Box, Flex, Link, useColorModeValue, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "components/miscellaneous/ColorModeSwitcher";
import { GithubButton } from "components/miscellaneous/GithubButton";

const NavLink = ({ children, to }) => (
  <Link
    href={to}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontFamily={"cursive"} as="a" href="/" fontSize={"2xl"}>
            GitHub Buddy
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/bookmarks"}>Bookmarks</NavLink>
              <NavLink to={"/users"}>Users</NavLink>
            </Stack>
          </Flex>

          <Flex alignItems={"center"} justify={"flex-end"} spacing={4}>
            <Stack direction={"row"} spacing={4}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <GithubButton justifySelf="flex-end" />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
