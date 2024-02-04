"use client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Flex,
  VStack,
  LinkBox,
  Icon,
} from "@chakra-ui/react";
import { BsHouseDoor } from "react-icons/bs";
import { Avatar, Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { CloseIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import SidebarMenu from "@/components/Sidebar";
import { Link as NextLink } from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import "../../css/layoutDashboard.css";
import "../../css/defaultDashboard.css";

import { signIn, signOut, useSession } from "next-auth/react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { status }: { status: string } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useState untuk sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk mengendalikan visibilitas Sidebar

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const username = "admin";

  return (
    <div className="layout">
      <Box
        bg="black"
        w="100%"
        p={4}
        color="white"
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        minW={"375px"}
      >
        <Stack
          display={{ base: "flex", md: "flex" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <IconButton
            className="icon-button"
            display={{ base: "block", md: "none" }}
            onClick={handleToggleSidebar}
            // onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="solid"
            aria-label="Toggle Sidebar"
          ></IconButton>
          <Text fontSize="2xl" display={{ base: "none", md: "block" }}>
            Welcome, {username}
          </Text>
        </Stack>
        <Stack>
          {status === "authenticated" ? (
            <Button colorScheme="gray" onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button colorScheme="gray" onClick={() => signIn()}>
              Login
            </Button>
          )}
          ;
        </Stack>
      </Box>
      <Flex float={"left"}>
        <Box
          display={{ base: isSidebarOpen ? "block" : "none", md: "block" }}
          position={{ base: "absolute", md: "relative" }}
          // display={{ base: isOpen ? "block" : "none", md: "block" }}
          // position={{ base: "absolute", md: "relative" }}
          w={{ base: "full", md: "64" }}
          h="full"
          bg="gray.800"
          color="white"
          zIndex={2}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "0" }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.3, type: "tween" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <SidebarMenu />
              </motion.div>
            )}
          </AnimatePresence>
          <VStack p="4" spacing="4" gap={10} paddingTop={10} height={"92vh"}>
            <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
              <ChakraLink
                display={"flex"}
                gap={1}
                alignItems={"center"}
                as={NextLink}
                href="/admin/dashboard"
              >
                <Icon as={BsHouseDoor} />
                Dashboard
              </ChakraLink>
            </LinkBox>
            <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
              <ChakraLink
                display={"flex"}
                gap={1}
                alignItems={"center"}
                as={NextLink}
                href="/admin/dashboard/daily_summary"
              >
                <EditIcon /> Daily Summary
              </ChakraLink>
            </LinkBox>

            <LinkBox _hover={{ bg: "red.500" }} border={2} p={5} width={"100%"}>
              <ChakraLink
                display={"flex"}
                gap={1}
                alignItems={"center"}
                as={NextLink}
                href="/admin/dashboard/monthly_summary"
              >
                <EditIcon /> Monthly Summary
              </ChakraLink>
            </LinkBox>
          </VStack>
        </Box>
      </Flex>
      <Box minW={"375px"} className="list">
        {children}
      </Box>
    </div>
  );
}

export default Layout;
