import { LinkBox, Stack, VStack } from "@chakra-ui/layout";
import Box from "next-auth/providers/box";
import { Text } from "@chakra-ui/layout";
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link as NextLink } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import "../app/css/defaultDashboard.css";

const SidebarMenu = () => {
  return (
    <Stack
      zIndex={2}
      className="sidebar-display"
      display={{ base: "block", md: "none" }}
      position={{ base: "absolute", md: "relative" }}
      w={{ base: "full", md: "64" }}
      h="100vh"
      bg="gray.800"
      color="white"
    >
      <VStack p="4" spacing="4" gap={10} paddingTop={10} className="sidebar">
        <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
          <ChakraLink
            as={NextLink}
            to="/admin/dashboard"
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
          >
            Dashboard
          </ChakraLink>
        </LinkBox>
        <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
          <ChakraLink as={NextLink} to="/admin/dashboard/daily_summary">
            <EditIcon /> Daily Summary
          </ChakraLink>
        </LinkBox>

        <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
          <ChakraLink as={NextLink} to="/admin/dashboard/monthly_summary">
            <EditIcon /> Monthly Summary
          </ChakraLink>
        </LinkBox>
      </VStack>
    </Stack>
  );
};

export default SidebarMenu;
