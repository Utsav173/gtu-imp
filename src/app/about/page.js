"use client";
import React from "react";
import {
  Container,
  Box,
  Text,
  Heading,
  Divider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
      bg={useColorModeValue("gray.200", "#1B1B1B")}
    >
      <Box
        maxWidth="500px"
        p="4"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg={useColorModeValue("#F4F9F9", "#121212")}
      >
        <Heading as="h2" size="xl" mb="4">
          Hey, nice to see you
        </Heading>
        <Text fontSize="lg" mb="4">
          This app is dedicated to providing educational resources for exam
          paper download and reading. All content is gathered from various
          sources to help students in their exam preparations.
        </Text>
        <Divider mb="4" />
        <Text>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </Text>
      </Box>
    </Flex>
  );
};

export default Page;
