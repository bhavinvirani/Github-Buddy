import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.4s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.300", "whiteAlpha.300"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={2}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 GitHub Buddy. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            target={"_blank"}
            label={"GitHub"}
            href={"https://github.com/bhavinvirani/Github-Buddy"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            target={"_blank"}
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/bhavinvirani45/"}
          >
            <FaLinkedin />
          </SocialButton>

          <SocialButton
            target={"_blank"}
            label={"Twitter"}
            href={"https://twitter.com/BhavinVirani45"}
          >
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
