"use client";
import "@/app/css/defaultLogin.css";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { delay } from "framer-motion";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export const LoginPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };
  const { push } = useRouter();
  const hadleLogin = async (e: any) => {
    e.preventDefault();
    const userName = document.getElementById("email") as HTMLInputElement;
    const userPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    console.log(userName.value, userPassword.value);
    try {
      const res = await signIn("credetials", {
        redirect: false,
        userName: userName.value,
        password: userPassword.value,
        callbackUrl: "/admin/dashboard",
      });
      if (!res?.error) {
        console.log("push admin dahsboard");
        push("/admin/dashboard");
      } else {
        console.log("else login gagal");
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // fetch("../../api/auth", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     userName: userName.value,
  //     userPassword: userPassword.value,
  //   }),
  // });

  return (
    <main>
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="10">
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
            bgColor={"white"}
          >
            <Stack
              spacing="6"
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar size="lg" bg="red.500" />
              <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                <Heading size={{ base: "xs", md: "sm" }}>
                  Log in to your account
                </Heading>
              </Stack>
            </Stack>
            <Box position="relative" paddingY="6">
              <Divider />
            </Box>
            {/* <Box position="relative" padding="3px"></Box> */}
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl
                  // onSubmit={hadleLogin}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={8}
                >
                  <div className="">
                    <FormLabel htmlFor="email">Username</FormLabel>
                    <Input
                      id="email"
                      name="userName"
                      type="text"
                      placeholder="Enter username"
                    />
                  </div>
                </FormControl>
                <FormControl
                // onSubmit={hadleLogin}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton
                        variant="text"
                        name="userPassword"
                        aria-label={
                          isOpen ? "Mask password" : "Reveal password"
                        }
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                      />
                    </InputRightElement>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      type={isOpen ? "text" : "password"}
                      autoComplete="current-password"
                      required
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
              <HStack justify="space-between"></HStack>
              <Stack spacing="6">
                <Button colorScheme="red" type="submit" onClick={hadleLogin}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </main>
  );
};

export default LoginPage;
